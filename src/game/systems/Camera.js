import { ECSGlobals } from 'game/EntityComponentSystem';

export const Viewport = {
  x: 0
}

const Limits = {
  x1: 350,
  x2: 590
}

export const Camera = (dt) => {
  const { EntitiesPool } = ECSGlobals;

  const entityToFollow = EntitiesPool.filter(entity => entity.components.hasOwnProperty('cameraFollow') && entity.components.cameraFollow)[0];

  const { position, velocity, direction } = entityToFollow.components.defaults;

  if (position.x < Limits.x1 + Viewport.x && direction === -1) {
    Viewport.x += velocity.x * dt;
  }

  if (position.x > Limits.x2 + Viewport.x && direction === 1) {
    Viewport.x += velocity.x * dt;
  }

}
