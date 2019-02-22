import { Clusters } from 'game/EntityComponentSystem';
import { Vector } from 'game/lib/Vector';

import { ENGINE_CONFIG } from 'config/game/engine';

export const Motion = (cluster) => {
  const entities = Clusters[cluster];

  // entity.components.defaults.currentLifeCyclePhase === 'action'

  entities.forEach(entity => {
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
      Vector.multiply(velocity, ENGINE_CONFIG.TIMESTEP)
    );
  });
};
