import { ECSGlobals } from 'game/EntityComponentSystem';

import { ENGINE_CONFIG } from 'config/game/engine';

export const Viewport = {
  x: 0
}

const Limits = {
  x1: 350,
  x2: 590
}

export const Camera = () => {
  const { EntitiesPool } = ECSGlobals;

  const entityToFollow = EntitiesPool.filter(entity => entity.components.hasOwnProperty('cameraFollow') && entity.components.cameraFollow)[0];

  const { position, velocity, direction } = entityToFollow.components.defaults;

  if (position.x < Limits.x1 + Viewport.x && direction === -1) {
    Viewport.x += velocity.x * ENGINE_CONFIG.TIMESTEP;
  }

  if (position.x > Limits.x2 + Viewport.x && direction === 1) {
    Viewport.x += velocity.x * ENGINE_CONFIG.TIMESTEP;
  }

}
