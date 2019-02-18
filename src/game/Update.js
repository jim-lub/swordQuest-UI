export const Update = state => {
  let { blocks } = state;
  
  blocks.forEach(block => {
    if (block.x > 940) block.x = 0;
    if (block.y > 540) block.y = 0;
    if (block.x < 0) block.x = 940;
    if (block.y < 0) block.y = 540;
    block.x += block.velX;
    block.y += block.velY
  });
}
