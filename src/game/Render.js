export const Render = (ctx, ENTITIES) => {

  ENTITIES.forEach(entity => {
    let cur = entity.components;
    ctx.fillStyle = cur.appearance.color;
    if (cur.appearance.color === 'grey') ctx.globalAlpha = 0.1;
    ctx.fillRect(cur.positionVectors.position.x, cur.positionVectors.position.y, cur.appearance.size.width, cur.appearance.size.height);
    ctx.globalAlpha = 1;
  });
}
