import { Clusters } from 'game/EntityComponentSystem';

import {
  Ctrls,
  Vector
} from 'game/lib/';

import { ENGINE_CONFIG } from 'config/game/engine';
let cooldown = 0;
let jumpCooldown = 0;
let jumpKeydown = null;
let jumpDoubleTapCooldown = 0;

export const UserInput = (cluster) => {

  if (cooldown > 0) {
    cooldown--;
  };

  if (jumpCooldown > 0) {
    jumpCooldown--;
  };

  if (jumpDoubleTapCooldown > 0) {
    jumpDoubleTapCooldown--;
  };

  const user = Clusters[cluster][0];

  const { acceleration, direction } = user.components.defaults;

  if (Ctrls.isPressed('shift') && cooldown === 0) {
    let horizontalDash = 2500, verticalDash = -98;

    // if (Ctrls.isPressed('space')) {
      //   verticalDash = -2500;
      // }

      acceleration.add(
        new Vector(horizontalDash * direction, verticalDash)
      );
      cooldown = 120;
  }


  if (Ctrls.isPressed('a') && Ctrls.lastKeyPressed('a', 'd')) {
    acceleration.add(
      new Vector(-40, 0)
    );
  }

  if (Ctrls.isPressed('d') && Ctrls.lastKeyPressed('d', 'a')) {
    acceleration.add(
      new Vector(40, 0)
    );
  }

  if (Ctrls.isPressed('space')) {
    if (user.components.collider.collisionOnAxis.y) {
      if (jumpCooldown !== 0) return;
      acceleration.add(
        new Vector(0, -2000)
      );
      jumpCooldown = 40;
      jumpDoubleTapCooldown = 10;
      jumpKeydown = Ctrls.getTimestampKeyDown('space');
    } else {
      if (jumpDoubleTapCooldown !== 0) return;
      if (jumpKeydown === Ctrls.getTimestampKeyDown('space')) return;

      acceleration.add(
        new Vector(0, -2500)
      );
      jumpDoubleTapCooldown = 50;
    }
  }

}
