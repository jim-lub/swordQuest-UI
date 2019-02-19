import { Vector } from 'game/lib/Vector';

const calculateMovement = (Ctrls, EntitiesPool, dt) => {
  const isPlayerControlled = EntitiesPool.filter(entity => entity.components.hasOwnProperty("isPlayerControlled"));

  const CONSTANT = dt * 0.01;

  isPlayerControlled.forEach(entity => {
    let { velocity, acceleration } = entity.components.positionVectors;

    if (Ctrls.isPressed('a')) {
      acceleration.x = -80;
    }

    if (Ctrls.isPressed('d')) {
      acceleration.x = 80;
    }

    if (Ctrls.isPressed('space')) {
      acceleration.y = -180;
    }

    velocity.x += acceleration.x * CONSTANT * CONSTANT * 0.5;
    velocity.y += acceleration.y * CONSTANT * CONSTANT * 0.5;

    velocity.x *= 0.96;
    velocity.y *= 0.96;

    acceleration.x = 0;
    acceleration.y = 0;
  })
}

const applyMovement = (EntitiesPool, dt) => {
  const isPlayerControlled = EntitiesPool.filter(entity => entity.components.hasOwnProperty("isPlayerControlled"));

  const CONSTANT = dt * 0.01;

  isPlayerControlled.forEach(entity => {
    let { position, velocity, acceleration } = entity.components.positionVectors;
    let { hasCollisionOnAxis } = entity.components.collisionDetection;

    if (hasCollisionOnAxis.x) velocity.set(velocity.x, 0);
    if (hasCollisionOnAxis.y) velocity.set(0, velocity.y);

    position.x += velocity.x * CONSTANT;
    position.y += velocity.y * CONSTANT;
  })
}

export const Movement = {
  calculateMovement,
  applyMovement
}
