import {
  Clusters,
  ECSGlobals
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
  const abilityEntities = Clusters[2];

  abilityEntities.forEach(entity => {
    const { position } = entity.components.defaults;
    const { attackPointsPool, patterns } = entity.components.attackPoints;

    patterns.forEach(pattern => {
      if (pattern.type !== 'circular') {
        return;
      }

      const radius = pattern.radius;
      const totalPointsToEmit = pattern.pointsToEmit;
      const rotatingRadianValue = pattern.rotatingRadian;

      if (attackPointsPool.length < totalPointsToEmit) {
        attackPointsPool.push({
          position: new Vector(position.x, position.y),
          origin: new Vector(position.x, position.y),
          angle: (0 / 180) * Math.PI,
          step: ((rotatingRadianValue / 180) - (0 / 180)) * Math.PI / totalPointsToEmit,
          radius: radius
        });
      }

      entity.components.attackPoints.attackPointsPool = attackPointsPool.map(point => {
        return {
          angle: point.angle + point.step,
          step: point.step,
          maxAngle: point.maxAngle,
          radius: point.radius,
          cos: Math.cos(point.angle),
          sin: Math.sin(point.angle),

          position: {
            x: position.x + (point.radius * Math.cos(point.angle)),
            y: position.y + (point.radius * Math.sin(point.angle))
          },
        }
      });
    });
  });


};
