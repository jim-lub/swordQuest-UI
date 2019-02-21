import { ECSGlobals } from 'game/EntityComponentSystem';
import { Ctrls } from 'game/lib/Controls';
import { Vector } from 'game/lib/Vector';

export const UserInput = (dt) => {
  const { EntitiesPool } = ECSGlobals;

  const user = EntitiesPool.filter(entity => entity.components.hasOwnProperty('userInput'))[0];

  const { velocity, acceleration, direction } = user.components.defaults;

  if (Ctrls.isPressed('a') && Ctrls.lastKeyPressed('a', 'd')) {
    acceleration.add(
      new Vector(-140, 0)
    );
  }

  if (Ctrls.isPressed('d') && Ctrls.lastKeyPressed('d', 'a')) {
    acceleration.add(
      new Vector(140, 0)
    );
  }

  if (Ctrls.isPressed('space') && user.components.collider.collisionOnAxis.y) {
    acceleration.add(
      new Vector(0, -3000)
    );
  }

  acceleration.add(new Vector(0, 98.1)); // NOTE: Quick gravity. Modify..

  user.components.defaults.direction = (Math.sign(acceleration.x) !== 0) ? Math.sign(acceleration.x) : direction; // NOTE: quick and dirty direction fix. Modify..

  velocity.add(
    acceleration.multiply(dt).multiply(dt).multiply(0.5)
  );

  velocity.multiply(0.97); // NOTE: quick and dirty fix for friction. Modify..

  acceleration.multiply(0);
}
