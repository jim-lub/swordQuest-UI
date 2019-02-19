export const Movement = (Ctrls, EntitiesPool, dt) => {
  const isPlayerControlled = EntitiesPool.filter(entity => entity.components.hasOwnProperty("isPlayerControlled"));

  const CONSTANT = dt * 0.01;

  isPlayerControlled.forEach(entity => {
    let calc = entity.components.position;

    if (Ctrls.isPressed('a')) {
      calc.accx = -80;
    }

    if (Ctrls.isPressed('d')) {
      calc.accx = 80;
    }

    if (Ctrls.isPressed('space')) {
      calc.accy = -180;
    }

    calc.velx += calc.accx * CONSTANT * CONSTANT * 0.5;
    calc.vely += calc.accy * CONSTANT * CONSTANT * 0.5;

    calc.velx *= 0.97;
    calc.vely *= 0.97;

    calc.posx += calc.velx * CONSTANT;
    calc.posy += calc.vely * CONSTANT;

    calc.accx = 0;
    calc.accy = 0;
  })
}
