import {
  Clusters
} from 'game/EntityComponentSystem';

import { Vector } from 'game/lib';

/********************************************************************************
* @ AttackPointsController
* -------------------------------------------------------------------------------
* @totalPointsToEmit: set the amount of attack points to be around the parent entity
* more points result in a slower rotation. Less points will increase the rotation speed
* @rotatingRadianValue: sets the size of the rotating radian
* @radius: sets the size of the radius
********************************************************************************/
export const AttackPointsController = () => {
  const abilityEntities = Clusters[2].filter(entity => entity.components.hasOwnProperty('attackPoints'));

  abilityEntities.forEach(entity => {
    const { position, direction } = entity.components.defaults;
    const { attackPointsPool, patterns } = entity.components.attackPoints;

    patterns.forEach((pattern, index) => {
      if (pattern.type !== 'circular' || entity.components.defaults.currentLifeCyclePhase !== 'action') {
        return;
      }

      if (!attackPointsPool[index]) {
        entity.components.attackPoints.attackPointsPool[index] = [];
      }

      const radius = pattern.radius;
      const pointsToEmit = pattern.pointsToEmit;
      const rotatingArcSize = pattern.rotatingArcSize;
      const offsetX = pattern.offset.x * direction;
      const offsetY = pattern.offset.y;

      if (attackPointsPool[index].length < pointsToEmit) {
        attackPointsPool[index].push({
          position: new Vector(position.x, position.y),
          angle: (0 / 180) * Math.PI,
          step: ((rotatingArcSize / 180) - (0 / 180)) * Math.PI / pointsToEmit,
          radius: radius
        });
      }

      entity.components.attackPoints.attackPointsPool[index] = attackPointsPool[index].map(point => {
        return {
          angle: point.angle + point.step,
          step: point.step,
          radius: point.radius,

          position: {
            x: position.x + offsetX + (point.radius * Math.cos(point.angle)),
            y: position.y + offsetY + (point.radius * Math.sin(point.angle) * direction)
          },
        }
      });
    });
  });


};
