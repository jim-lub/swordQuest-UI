import {
  Clusters,
  ECSGlobals
} from 'game/EntityComponentSystem';

import { Viewport } from 'game/systems/Camera';

export const RenderAttackPoints = (ctx) => {
  const abilityEntities = Clusters[2].filter(entity => entity.components.hasOwnProperty('attackPoints'));

  abilityEntities.forEach(entity => {
    const { attackPointsPool } = entity.components.attackPoints;

    attackPointsPool.forEach(subPool => {
      subPool.forEach(point => {
        const { position } = point;

        ctx.fillRect(
          position.x - Viewport.x,
          position.y,
          1,
          1
        );

        ctx.globalAlpha = 1;
        // render center point
        ctx.fillStyle = 'orangered';
        ctx.fillRect(
          position.x - Viewport.x,
          position.y,
          1,
          1
        );
      });
    });
  });

}
