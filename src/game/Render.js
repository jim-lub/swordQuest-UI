export const Render = (ctx, ENTITIES) => {

  ENTITIES.forEach(entity => {
    let cur = entity.components;
    ctx.fillStyle = cur.render.color;
    ctx.fillRect(cur.position.posx, cur.position.posy, cur.render.size.width, cur.render.size.height);
  });
}
