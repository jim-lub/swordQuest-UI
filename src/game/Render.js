export const Render = (ctx, ENTITIES) => {

  ENTITIES
  .filter(entity => entity.components.hasOwnProperty("appearance") && entity.components.hasOwnProperty("positionVectors"))
  .forEach(entity => {
    let cur = entity.components;
    ctx.fillStyle = cur.appearance.color;
    if (cur.appearance.color === 'grey') ctx.globalAlpha = 0.1;

    ctx.fillRect(
      cur.positionVectors.position.x,
      cur.positionVectors.position.y,
      cur.appearance.size.width,
      cur.appearance.size.height
    );

    if (cur.hasOwnProperty('isPlayerControlled')) {
      let x;

      ctx.fillStyle = 'teal';
      if (cur.positionVectors.direction === -1) {
        x = cur.positionVectors.position.x + 5;
      } else {
        x = cur.positionVectors.position.x + cur.appearance.size.width - 15;
      }

      ctx.fillRect(
        x,
        cur.positionVectors.position.y,
        10,
        10
      );
    }

    ctx.globalAlpha = 1;
  });
}
