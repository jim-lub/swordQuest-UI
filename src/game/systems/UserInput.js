import { Clusters } from 'game/EntityComponentSystem';

import {
  Ctrls,
  Vector
} from 'game/lib/';

import { PLAYER_CONSTANTS } from 'config/game/PLAYER_CONSTANTS';

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

      acceleration.add(
        new Vector(PLAYER_CONSTANTS.DASH_HORIZONTAL * direction, PLAYER_CONSTANTS.DASH_VERTICAL)
      );
      cooldown = PLAYER_CONSTANTS.DASH_COOLDOWN_IN_TICKS;
  }


  if (Ctrls.isPressed('a') && Ctrls.lastKeyPressed('a', 'd')) {
    acceleration.add(
      new Vector(-PLAYER_CONSTANTS.SPEED_RUNNING, 0)
    );
  }

  if (Ctrls.isPressed('d') && Ctrls.lastKeyPressed('d', 'a')) {
    acceleration.add(
      new Vector(PLAYER_CONSTANTS.SPEED_RUNNING, 0)
    );
  }

  if (Ctrls.isPressed('space')) {
    if (user.components.collider.collisionOnAxis.y) {
      if (jumpCooldown !== 0) return;
      acceleration.add(
        new Vector(PLAYER_CONSTANTS.JUMP_HORIZONTAL, PLAYER_CONSTANTS.JUMP_VERTICAL)
      );
      jumpCooldown = PLAYER_CONSTANTS.JUMP_COOLDOWN_IN_TICKS;
      jumpDoubleTapCooldown = PLAYER_CONSTANTS.DELAY_BEFORE_CAN_DOUBLE_JUMP;
      jumpKeydown = Ctrls.getTimestampKeyDown('space');
    } else {
      if (jumpDoubleTapCooldown !== 0) return;
      if (jumpKeydown === Ctrls.getTimestampKeyDown('space')) return;

      acceleration.add(
        new Vector(PLAYER_CONSTANTS.DOUBLE_JUMP_HORIZONTAL, PLAYER_CONSTANTS.DOUBLE_JUMP_VERTICAL)
      );
      jumpDoubleTapCooldown = PLAYER_CONSTANTS.DOUBLE_JUMP_COOLDOWN_IN_TICKS;
    }
  }

}
