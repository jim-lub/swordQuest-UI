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

    colliderObstaclesArray.forEach(obstacle => {
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
  let collisionX = point.x >= obstacle.x && point.x <= obstacle.x + obstacle.width;
  let collisionY = point.y >= obstacle.y && point.y <= obstacle.y + obstacle.height;

  return collisionX && collisionY;
}

function getCollisionPoints(collider, dt, axis) {
  const { position, velocity } = collider.components.defaults;
  const { collisionBox } = collider.components.collider;

  let offsetX, offsetY;

  if (axis === 'x') {
    offsetX = velocity.x;
    offsetY = 0;
  }

  if (axis === 'y') {
    offsetX = 0;
    offsetY = velocity.y;
  }

  return [
    {
      x: position.x + (offsetX) * dt,
      y: position.y + (offsetY) * dt
    },
    {
      x: position.x + (offsetX) * dt + collisionBox.width,
      y: position.y + (offsetY) * dt
    },
    {
      x: position.x + (offsetX) * dt,
      y: position.y + (offsetY) * dt + collisionBox.height
    },
    {
      x: position.x + (offsetX) * dt + collisionBox.width,
      y: position.y + (offsetY) * dt + collisionBox.height
    }
  ]
}
