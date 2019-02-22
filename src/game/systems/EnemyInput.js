import { Clusters } from 'game/EntityComponentSystem';
import { Vector } from 'game/lib/';

import { ENGINE_CONFIG } from 'config/game/engine';

import { getPlayerData } from 'game/utils/player';

export const EnemyInput = (cluster) => {
  const userData = getPlayerData().components;
  const user = {
    position: userData.defaults.position,
    centerPosition: Vector.add(userData.appearance.center, userData.defaults.position),
    direction: userData.defaults.direction,
    size: userData.appearance.size
  }

  const enemies = Clusters[cluster];
  enemies.forEach(enemy => {
    const { position, velocity, acceleration, direction } = enemy.components.defaults;
    const { collisionBox } = enemy.components.collider;

    if (Math.abs(position.x - user.position.x) < 150) {
      acceleration.add(
        new Vector(-20 * Math.sign(position.x - user.position.x), 0)
      );
    }

    acceleration.add(new Vector(0, 98)); // NOTE: Quick gravity. Modify..

    enemy.components.defaults.direction = (Math.sign(acceleration.x) !== 0) ? Math.sign(acceleration.x) : direction; // NOTE: quick and dirty direction fix. Modify..

    velocity.add(
      acceleration.multiply(ENGINE_CONFIG.TIMESTEP).multiply(ENGINE_CONFIG.TIMESTEP).multiply(0.5)
    );

    velocity.multiply(0.96); // NOTE: quick and dirty fix for friction. Modify..

    acceleration.multiply(0);
  });



}
