import {
  Clusters
} from 'game/EntityComponentSystem';

import { Viewport } from 'game/systems/Camera';

export const RenderHealth = (ctx) => {
  const entities = [
    ...Clusters['user'].filter(entity => entity.components.hasOwnProperty('health')),
    ...Clusters['enemies'].filter(entity => entity.components.hasOwnProperty('health'))
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
