export const Render = (ctx, ENTITIES) => {

  ENTITIES.forEach(entity => {
    let cur = entity.components;
    ctx.fillStyle = cur.appearance.color;
    ctx.fillRect(cur.positionVectors.position.x, cur.positionVectors.position.y, cur.appearance.size.width, cur.appearance.size.height);
  });
}
