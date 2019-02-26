import {
  Clusters
} from 'game/EntityComponentSystem';

import { Viewport } from 'game/systems/Camera';

export const RenderHealth = (ctx) => {
  const entities = [
    ...Clusters[0].filter(entity => entity.components.hasOwnProperty('health')),
    ...Clusters[1].filter(entity => entity.components.hasOwnProperty('health'))
  ]

  entities.forEach(entity => {
    const { position } = entity.components.defaults;
    const { health } = entity.components;

    ctx.fillStyle = 'red';
    ctx.font = '24px serif';

    ctx.fillText(
      Math.round(health.value),
      position.x - Viewport.x,
      position.y - 50
    )
  });

}
