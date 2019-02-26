import {
  Clusters
} from 'game/EntityComponentSystem';

import { Abilities } from 'config/abilities';

export const AttackPointCollisionDetection = () => {
  const enemyEntities = Clusters[1];
  const abilityEntities = Clusters[2]
    .filter(entity => entity.components.hasOwnProperty('attackPoints'))
    .filter(ability => {
      const abilityPositionX = ability.components.defaults.position.x;
      const enemiesInRange = enemyEntities.filter(enemy => {
        const enemyPositionX = enemy.components.defaults.position.x;
        if (Math.abs(abilityPositionX - enemyPositionX) < 100) return true;
        return false;
      });

      return (enemiesInRange.length > 0)
    });
  let count_abent = 0, count_attpools = 0, count_attpoints = 0, count_enent = 0, count_hits = 0;

  abilityEntities.forEach(ability => {
    const refTo = Abilities.refNameToComponents(ability.components.defaults.ref_name);
    const abilityData = Abilities[refTo.combatType][refTo.className][refTo.abilityName];

    count_abent++; // check
    const { attackPointsPool } = ability.components.attackPoints;

    attackPointsPool.forEach(pool => {
      count_attpools++; // check
      pool.forEach(point => {
        count_attpoints++; // check
        enemyEntities.forEach(enemy => {
          const { position } = enemy.components.defaults;
          const { collisionBox } = enemy.components.colliderObstacle;
          if (Math.abs(point.position.x - position.x) > 100) return;
          count_enent++; // check
          if (pointCollision({x: point.position.x, y: point.position.y}, {x: position.x, y: position.y, width: collisionBox.width, height: collisionBox.height})) {
            count_hits++; // check
            enemy.components.health.value -= abilityData.damage;
          }
        })
      });
    });
  });

  console.clear();
  console.log(count_abent, count_attpools, count_attpoints, count_enent, count_hits);

};

const pointCollision = (point, obstacle) => {
  let collisionX = point.x >= obstacle.x - (obstacle.width / 2) && point.x <= obstacle.x + (obstacle.width / 2);
  let collisionY = point.y >= obstacle.y - (obstacle.height / 2) && point.y <= obstacle.y + (obstacle.height / 2);

  return collisionX && collisionY;
}
