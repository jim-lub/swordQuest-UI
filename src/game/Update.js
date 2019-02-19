export const Update = (Ctrls, dt) => {
  let entities = [];
  let CONSTANT = dt * 0.01;
  // position += velocity * delta + acceleration * delta * delta * 0.5

  entities.forEach(entity => {
    if (entity.isPlayerControlled) {
      if (Ctrls.isPressed('a')) {
        entity.acc.x = -80;
      }

      if (Ctrls.isPressed('d')) {
        entity.acc.x = 80;
      }

      if (Ctrls.isPressed('space')) {
        entity.acc.y = -180;
      }

      entity.vel.x += entity.acc.x * CONSTANT * CONSTANT * 0.5;
      entity.vel.y += entity.acc.y * CONSTANT * CONSTANT * 0.5;

      entity.vel.x *= 0.97;
      entity.vel.y *= 0.97;

      entity.pos.x += entity.vel.x * CONSTANT;
      entity.pos.y += entity.vel.y * CONSTANT;

      entity.acc.x = 0;
      entity.acc.y = 0;
    }
  });
}

function logPressedControls(Ctrls) {
  console.clear();
  console.log("W:  " + Ctrls.isPressed('w'));
  console.log("A:  " + Ctrls.isPressed('a'));
  console.log("S:  " + Ctrls.isPressed('s'));
  console.log("D:  " + Ctrls.isPressed('d'));
  console.log("Space:  " + Ctrls.isPressed('space'));
}

function logEntityState(entity, CONSTANT) {
  console.clear();
  console.log("Pos X:  " + entity.pos.x);
  console.log("Vel X:  " + entity.vel.x);
  console.log("Acc x:  " + entity.acc.x);
  console.log("Acc x2:  " + entity.acc.x * CONSTANT * CONSTANT * 0.5);
}
