import { ECSGlobals } from 'game/EntityComponentSystem';

export const CollisionDetection = (dt) => {
  const { EntitiesPool } = ECSGlobals;

  const collidersArray = EntitiesPool.filter(entity => entity.components.hasOwnProperty('collider'));
  const colliderObstaclesArray = EntitiesPool.filter(entity => entity.components.hasOwnProperty('colliderObstacle'));

  collidersArray.forEach(collider => {
    collider.components.collider.collisionOnAxis.x = false;
    collider.components.collider.collisionOnAxis.y = false;

    const collisionPointsX =
      getCollisionPoints(collider, dt, 'x');
    const collisionPointsY =
      getCollisionPoints(collider, dt, 'y');

    [...colliderObstaclesArray].forEach(obstacle => {
      if (collider.id === obstacle.id) return;

      const { position } = obstacle.components.defaults;
      const { collisionBox } = obstacle.components.colliderObstacle;

      if (boxCollision(
        collisionPointsX,
        {
          x: position.x,
          y: position.y,
          width: collisionBox.width,
          height: collisionBox.height
        }
      )) {
        collider.components.collider.collisionOnAxis.x = true;
      }

      if (boxCollision(
        collisionPointsY,
        {
          x: position.x,
          y: position.y,
          width: collisionBox.width,
          height: collisionBox.height
        }
      )) {
        collider.components.collider.collisionOnAxis.y = true;
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
  let collisionX = point.x >= obstacle.x - (obstacle.width / 2) && point.x <= obstacle.x + (obstacle.width / 2);
  let collisionY = point.y >= obstacle.y - (obstacle.height / 2) && point.y <= obstacle.y + (obstacle.height / 2);

  return collisionX && collisionY;
}

function getCollisionPoints(collider, dt, axis) {
  const { position, velocity } = collider.components.defaults;
  const { collisionBox } = collider.components.collider;

  let velX, velY;
  let box = collisionBox;

  if (axis === 'x') {
    velX = velocity.x;
    velY = 0;
  }

  if (axis === 'y') {
    velX = 0;
    velY = velocity.y;
  }

  const collisionPoints = [
    { // top left
      x: (position.x - (box.width / 2)) + velX * dt,
      y: (position.y - (box.height / 2)) + velY * dt
    },
    { // top
      x: (position.x) + velX * dt,
      y: (position.y - box.height / 2) + velY * dt
    },
    { // top right
      x: (position.x + box.width / 2) + velX * dt,
      y: (position.y - box.height / 2) + velY * dt
    },
    { // right
      x: (position.x + box.width / 2) + velX * dt,
      y: (position.y) + velY * dt
    },
    { // bottom right
      x: (position.x + box.width / 2) + velX * dt,
      y: (position.y + box.height / 2) + velY * dt
    },
    { // bottom
      x: (position.x) + velX * dt,
      y: (position.y + box.height / 2) + velY * dt
    },
    { // bottom left
      x: (position.x - box.width / 2) + velX * dt,
      y: (position.y + box.height / 2) + velY * dt
    },
    { // left
      x: (position.x - box.width / 2) + velX * dt,
      y: (position.y) + velY * dt
    }
  ]

  collider.components.collider.collisionPoints = collisionPoints;

  return collisionPoints;
}
