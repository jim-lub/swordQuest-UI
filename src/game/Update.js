export const Update = (Ctrls, state, dt) => {
  let { entities, blocks } = state;
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


  blocks.forEach(block => {
    if (block.x > 940) block.x = 0;
    if (block.y > 540) block.y = 0;
    if (block.x < 0) block.x = 940;
    if (block.y < 0) block.y = 540;

    block.accX = block.inputX;
    block.accY = block.inputY;

    block.velX += block.accX * CONSTANT * CONSTANT * 0.5;
    block.velY += block.accY * CONSTANT * CONSTANT * 0.5;

    block.velX *= 0.96;
    block.velY *= 0.96;

    block.x += block.velX * CONSTANT;
    block.y += block.velY * CONSTANT;

    block.accX = 0;
    block.accY = 0;
  });

  // logPressedControls(Ctrls);
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
