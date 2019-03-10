import { Clusters } from 'game/EntityComponentSystem';
import { Vector } from 'game/lib/';

import { ENGINE_CONFIG } from 'config/game/engine';

export const Physics = (cluster) => {
  const entities = Clusters[cluster];

  entities.forEach(entity => {
    const { velocity, acceleration, direction } = entity.components.defaults;

    acceleration.add(new Vector(0, 98)); // NOTE: Quick gravity. Modify..

    entity.components.defaults.direction = (Math.sign(acceleration.x) !== 0) ? Math.sign(acceleration.x) : direction;
    velocity.add(
      acceleration.multiply(ENGINE_CONFIG.TIMESTEP).multiply(ENGINE_CONFIG.TIMESTEP).multiply(0.5)
    );

    if (Math.abs(velocity.x) < 0.2) velocity.set(0, velocity.y);
    if (Math.abs(velocity.y) < 0.2) velocity.set(velocity.x, 0);

    velocity.multiply(0.96); // NOTE: quick and dirty fix for friction. Modify..


    acceleration.multiply(0);
  });
}
