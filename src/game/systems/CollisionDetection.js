import { Vector } from 'game/lib/Vector';

export const CollisionDetection = (EntitiesPool, dt) => {
  const hasCollisionDetection = EntitiesPool
    .filter(entity => entity.components.hasOwnProperty("collisionDetection"));

  const dynamicType = hasCollisionDetection
    .filter(entity => entity.components.collisionDetection.type === 'dynamic');

  const staticType = hasCollisionDetection
    .filter(entity => entity.components.collisionDetection.type === 'static');

  const obstacles = [...dynamicType, ...staticType];

  const CONSTANT = dt * 0.01;

  dynamicType.forEach(entity => {
    entity.components.collisionDetection.hasCollisionOnAxis.x = false;
    entity.components.collisionDetection.hasCollisionOnAxis.y = false;

    const collisionPoints = getCollisionPoints(entity.components, CONSTANT);

    obstacles.forEach(obstacle => {
      if (entity.id === obstacle.id) return;

      if (boxCollision(
        collisionPoints,
        {
          x: obstacle.components.positionVectors.position.x,
          y: obstacle.components.positionVectors.position.y,
          width: obstacle.components.collisionDetection.hitbox.width,
          height: obstacle.components.collisionDetection.hitbox.height
        }
      )) {
        entity.components.collisionDetection.hasCollisionOnAxis.x = true;
      }

      if (boxCollision(
        collisionPoints,
        {
          x: obstacle.components.positionVectors.position.x,
          y: obstacle.components.positionVectors.position.y,
          width: obstacle.components.collisionDetection.hitbox.width,
          height: obstacle.components.collisionDetection.hitbox.height
        }
      )) {
        entity.components.collisionDetection.hasCollisionOnAxis.y = true;
      }

    });
    console.log(entity.id, entity.components.collisionDetection.hasCollisionOnAxis);
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

function getCollisionPoints(components, CONSTANT) {
  const hitbox = components.collisionDetection.hitbox;
  const pos = components.positionVectors.position;
  const vel = components.positionVectors.velocity;

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
