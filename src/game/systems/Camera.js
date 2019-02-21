import { ECSGlobals } from 'game/EntityComponentSystem';

export const Viewport = {
  x: 0
}

const Limits = {
  x1: 200,
  x2: 740
}

export const Camera = (dt) => {
  const { EntitiesPool } = ECSGlobals;

  const entityToFollow = EntitiesPool.filter(entity => entity.components.hasOwnProperty('cameraFollow') && entity.components.cameraFollow)[0];

  const { position, velocity } = entityToFollow.components.defaults;

  if (position.x < Limits.x1 + Viewport.x) {
    Viewport.x += velocity.x * dt;
  }

  if (position.x > Limits.x2 + Viewport.x) {
    Viewport.x += velocity.x * dt;
  }

  console.clear();
  console.log(position);
  console.log(Viewport);
}
