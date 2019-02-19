import { Vector } from 'game/lib/Vector';

const calculate = (Ctrls, EntitiesPool, dt) => {
  const isPlayerControlled = EntitiesPool
    .filter(entity => entity.components.hasOwnProperty("isPlayerControlled"));

  const CONSTANT = dt * 0.01;

  isPlayerControlled.forEach(entity => {
    let { velocity, acceleration } = entity.components.positionVectors;

    if (Ctrls.isPressed('a')) {
      acceleration.add(new Vector(-80, 0));
    }

    if (Ctrls.isPressed('d')) {
      acceleration.add(new Vector(80, 0));
    }

    if (Ctrls.isPressed('space') && entity.components.collisionDetection.hasCollisionOnAxis.y) {
      acceleration.add(new Vector(0, -3000));
    }

    acceleration.add(_gravity());

    velocity.x += acceleration.x * CONSTANT * CONSTANT * 0.5;
    velocity.y += acceleration.y * CONSTANT * CONSTANT * 0.5;


    velocity.x *= 0.97;
    velocity.y *= 0.97;

    acceleration.x = 0;
    acceleration.y = 0;
  })
}

const apply = (EntitiesPool, dt) => {
  const isPlayerControlled = EntitiesPool.filter(entity => entity.components.hasOwnProperty("isPlayerControlled"));

  const CONSTANT = dt * 0.01;

  isPlayerControlled.forEach(entity => {
    let { position, velocity } = entity.components.positionVectors;
    let { hasCollisionOnAxis } = entity.components.collisionDetection;

    if (hasCollisionOnAxis.x) velocity.set(0, velocity.y);
    if (hasCollisionOnAxis.y) velocity.set(velocity.x, 0);

    position.x += velocity.x * CONSTANT;
    position.y += velocity.y * CONSTANT;
  })
}

export const Movement = {
  calculate,
  apply
}

function _gravity() {
  let f = new Vector(0, 98.1);
  return f;
}
