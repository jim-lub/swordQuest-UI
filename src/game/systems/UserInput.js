import { Clusters } from 'game/EntityComponentSystem';

import {
  Ctrls,
  Vector
} from 'game/lib/';

import { ENGINE_CONFIG } from 'config/game/engine';

export const UserInput = (cluster) => {

  const user = Clusters[cluster][0];

  const { velocity, acceleration, direction } = user.components.defaults;

  if (Ctrls.isPressed('a') && Ctrls.lastKeyPressed('a', 'd')) {
    acceleration.add(
      new Vector(-30, 0)
    );
  }

  if (Ctrls.isPressed('d') && Ctrls.lastKeyPressed('d', 'a')) {
    acceleration.add(
      new Vector(30, 0)
    );
  }

  if (Ctrls.isPressed('space') && user.components.collider.collisionOnAxis.y) {
    acceleration.add(
      new Vector(0, -2000)
    );
  }

  acceleration.add(new Vector(0, 98)); // NOTE: Quick gravity. Modify..

  user.components.defaults.direction = (Math.sign(acceleration.x) !== 0) ? Math.sign(acceleration.x) : direction; // NOTE: quick and dirty direction fix. Modify..

  velocity.add(
    acceleration.multiply(ENGINE_CONFIG.TIMESTEP).multiply(ENGINE_CONFIG.TIMESTEP).multiply(0.5)
  );

  velocity.multiply(0.96); // NOTE: quick and dirty fix for friction. Modify..

  acceleration.multiply(0);
}
