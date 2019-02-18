export const Render = (ctx, state) => {
  let { blocks } = state;

  blocks.forEach(block => {
    ctx.fillStyle = block.color;
    ctx.fillRect(block.x, block.y, block.width, block.height);
  });
}
