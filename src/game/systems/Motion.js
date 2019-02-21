import { ECSGlobals } from 'game/EntityComponentSystem';
import { Vector } from 'game/lib/Vector';

export const Motion = (dt) => {
  const { EntitiesPool } = ECSGlobals;

  const user = EntitiesPool.filter(entity => entity.components.hasOwnProperty('userInput'));
  const abilities = EntitiesPool.filter(entity => entity.components.defaults.type === 'ability' && entity.components.defaults.currentLifeCyclePhase === 'action');

  [...user, ...abilities].forEach(entity => {
    const { position, velocity } = entity.components.defaults;

    if (entity.components.hasOwnProperty('collider')) {
      const { collisionOnAxis } = entity.components.collider;

      if (entity.components.defaults.type === 'ability') {
        
      }

      if (collisionOnAxis.x) {
        velocity.set(0, velocity.y);
      }

      if (collisionOnAxis.y) {
        velocity.set(velocity.x, 0);
      }
    }

    position.add(
      Vector.multiply(velocity, dt)
    );
  });
};
