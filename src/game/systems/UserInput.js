import { Clusters } from 'game/EntityComponentSystem';

import {
  Ctrls,
  Vector
} from 'game/lib/';

import { ENGINE_CONFIG } from 'config/game/engine';

export const UserInput = (cluster) => {

  const user = Clusters[cluster][0];

  const { acceleration } = user.components.defaults;

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
}
