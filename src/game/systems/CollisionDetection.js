export const CollisionDetection = (EntitiesPool, dt) => {
  const entitiesWithCollisionDetection = EntitiesPool
    .filter(entity => entity.components.hasOwnProperty("collisionDetection"));

  const dynamicEntities = entitiesWithCollisionDetection
    .filter(entity => entity.components.collisionDetection.type === 'dynamic');

  const staticEntities = entitiesWithCollisionDetection
    .filter(entity => entity.components.collisionDetection.type === 'static');

  const obstacles = [...dynamicEntities, ...staticEntities];

  dynamicEntities.forEach(entity => {
    const { hasCollisionOnAxis } = entity.components.collisionDetection;
    const { velocity } = entity.components.positionVectors;

    hasCollisionOnAxis.x = false;
    hasCollisionOnAxis.y = false;

    const collisionPointsX =
      getCollisionPoints(entity.components, dt, {x: velocity.x, y: 0});
    const collisionPointsY =
      getCollisionPoints(entity.components, dt, {x: 0, y: velocity.y});

    obstacles
      .forEach(obstacle => {
        if (entity.id === obstacle.id) return;

        const { position } = obstacle.components.positionVectors;
        const { hitbox } = obstacle.components.collisionDetection;

        if (boxCollision(
          collisionPointsX,
          {
            x: position.x,
            y: position.y,
            width: hitbox.width,
            height: hitbox.height
          }
        )) {
          hasCollisionOnAxis.x = true;
        }

        if (boxCollision(
          collisionPointsY,
          {
            x: position.x,
            y: position.y,
            width: hitbox.width,
            height: hitbox.height
          }
        )) {
          hasCollisionOnAxis.y = true;
        }
    });
  });
}

function boxCollision(collisionPoints, obstacle) {
  let isColliding = false;

  for (let i = 0; i < collisionPoints.length; i++) {
    if (pointCollision(collisionPoints[i], obstacle)) {
      isColliding = true;
      break;
    }
  }

  return isColliding;
}

function pointCollision(point, obstacle) {
  let collisionX = point.x >= obstacle.x && point.x <= obstacle.x + obstacle.width;
  let collisionY = point.y >= obstacle.y && point.y <= obstacle.y + obstacle.height;

  return collisionX && collisionY;
}

function getCollisionPoints(components, dt, vel) {
  const CONSTANT = dt * 0.01;
  const hitbox = components.collisionDetection.hitbox;
  const pos = components.positionVectors.position;

  return [
    {
      x: pos.x + vel.x * CONSTANT,
      y: pos.y + vel.y * CONSTANT
    },
    {
      x: pos.x + vel.x * CONSTANT + hitbox.width,
      y: pos.y + vel.y * CONSTANT
    },
    {
      x: pos.x + vel.x * CONSTANT,
      y: pos.y + vel.y * CONSTANT + hitbox.height
    },
    {
      x: pos.x + vel.x * CONSTANT + hitbox.width,
      y: pos.y + vel.y * CONSTANT + hitbox.height
    }
  ]
}
