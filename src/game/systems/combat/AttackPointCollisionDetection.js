import {
  Clusters
} from 'game/EntityComponentSystem';

import { Abilities } from 'config/abilities';

export const AttackPointCollisionDetection = () => {
  const enemies = Clusters['enemies'];
  const abilities = Clusters['abilities']
    .filter(entity => entity.components.hasOwnProperty('attackPoints'));

  /* Filter abilities that are in range of enemies */
  const abilitiesInRangeOfEnemies = abilities
    .filter(ability => {
      const { position } = ability.components.defaults;

      const enemiesInRange =
        enemies.filter(enemy => (Math.abs(position.x - enemy.components.defaults.position.x) < 100)).length;

      return (enemiesInRange > 0);
    });

  /* Loop over abilities that are in range of enemies to check for collisions */
  abilitiesInRangeOfEnemies
    .forEach(ability => {
      const { attackPointsPool } = ability.components.attackPoints;
      const refTo = Abilities.refNameToComponents(ability.components.defaults.ref_name);
      const abilityData = Abilities[refTo.combatType][refTo.className][refTo.abilityName];

      attackPointsPool
      	.forEach(pool =>
          pool.forEach(point =>
            enemies.forEach(enemy => {
              const pointPosition = point.position;
              const enemyPosition = enemy.components.defaults.position;
              const enemyCollisionBox = enemy.components.colliderObstacle.collisionBox;

              if (Math.abs(pointPosition.x - enemyPosition.x) > 100) return;

              if (pointCollision(
                {x: pointPosition.x, y: pointPosition.y},
                {x: enemyPosition.x, y: enemyPosition.y, width: enemyCollisionBox.width, height: enemyCollisionBox.height}
              )){
                enemy.components.health.value -= abilityData.damage;
              }
          }))
        );
    });
}

const pointCollision = (point, obstacle) => {
  let collisionX = point.x >= obstacle.x - (obstacle.width / 2) && point.x <= obstacle.x + (obstacle.width / 2);
  let collisionY = point.y >= obstacle.y - (obstacle.height / 2) && point.y <= obstacle.y + (obstacle.height / 2);

  return collisionX && collisionY;
}
