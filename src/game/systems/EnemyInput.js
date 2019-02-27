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
    const { position, acceleration } = enemy.components.defaults;

    if (Math.abs(position.x - user.position.x) < 150) {
      acceleration.add(
        new Vector(-20 * Math.sign(position.x - user.position.x), 0)
      );
    }
  });



}
