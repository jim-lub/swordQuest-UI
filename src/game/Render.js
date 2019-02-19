export const Render = (ctx, state) => {
  let { blocks, entities } = state;

  entities.forEach(entity => {
    ctx.fillStyle = "purple";
    ctx.fillRect(entity.pos.x, entity.pos.y, entity.size.width, entity.size.height);
  });

  blocks.forEach(block => {
    ctx.fillStyle = block.color;
    ctx.fillRect(block.x, block.y, block.width, block.height);
  });
}
