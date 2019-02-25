import { ECSGlobals } from 'game/EntityComponentSystem';
import { Viewport } from 'game/systems/Camera';

export const RenderAppearance = (ctx) => {
  const { EntitiesPool } = ECSGlobals;

  const entitiesToRender = EntitiesPool.filter(entity => entity.components.hasOwnProperty('appearance'));

  entitiesToRender.forEach(entity => {
    const { position, direction } = entity.components.defaults;
    const { color, opacity, size } = entity.components.appearance;

    if (color !== ctx.fillStyle) {
        ctx.fillStyle = color;
    }

    ctx.globalAlpha = opacity;

    ctx.fillRect(
      (position.x - (size.width / 2)) - Viewport.x,
      (position.y - (size.height / 2)),
      size.width,
      size.height
    );

    if (entity.components.hasOwnProperty('userInput')) {
      let offsetX;

      if (direction === -1) {
        offsetX = - 10;
      } else {
        offsetX = 5;
      }

      ctx.fillStyle = 'white';
      ctx.fillRect(
        position.x + offsetX - Viewport.x,
        position.y - 10,
        5,
        5
      );
    }


    ctx.globalAlpha = 1;
    // render center point
    ctx.fillStyle = 'coral';
    ctx.fillRect(
      position.x - Viewport.x,
      position.y,
      1,
      1
    );
    // render collision points
    if (entity.components.hasOwnProperty('collider')) {
      entity.components.collider.collisionPoints.forEach(point => {
        ctx.fillStyle = 'deeppink';
        ctx.fillRect(
          point.x - Viewport.x,
          point.y,
          1,
          1
        );
      });
    };
  });
}
