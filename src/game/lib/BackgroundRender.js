import { Viewport } from 'game/systems/Camera';

let image = new Image();
image.src = require('../../assets/bg/forest-sheet.png');

export const BackgroundRender = (ctx) => {

  let offsetX = Viewport.x || 0;
  let offsetY = 0;
  let speed = 0;
  let section = Math.abs(Math.floor(offsetX / 928)) + 1;

  for (let i = 0; i < 11; i++) {
    let offset = offsetX * speed;
    if (Math.round(offset) < (-928 * section)) offset = (offset + 928 * section);
    if (Math.round(offset) > 928) offset = (offset - 928);

    ctx.drawImage(image, offset - 927, offsetY, 928, 540, 0, 0, 928, 540);
    ctx.drawImage(image, offset, offsetY, 928, 540, 0, 0, 928, 540);
    ctx.drawImage(image, offset + 927, offsetY, 928, 540, 0, 0, 928, 540);

    speed += 0.15;
    offsetY += 540;
  }

};
