import { ECSGlobals } from 'game/EntityComponentSystem';
import { Vector } from 'game/lib/Vector';

export const Motion = (dt) => {
  const { EntitiesPool } = ECSGlobals;

  const user = EntitiesPool.filter(entity => entity.components.hasOwnProperty('userInput'))[0];

  const { position, velocity } = user.components.defaults;
  const { collisionOnAxis } = user.components.collider;

  if (collisionOnAxis.x) {
    velocity.set(0, velocity.y);
  }

  if (collisionOnAxis.y) {
    velocity.set(velocity.x, 0);
  }

  position.add(
      Vector.multiply(velocity, dt)
  );
}
