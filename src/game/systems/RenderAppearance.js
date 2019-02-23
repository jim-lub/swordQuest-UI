import { ECSGlobals } from 'game/EntityComponentSystem';
import { Viewport } from 'game/systems/Camera';

export const RenderAppearance = (ctx) => {
  const { EntitiesPool } = ECSGlobals;

  const entitiesToRender = EntitiesPool.filter(entity => entity.components.hasOwnProperty('appearance'));

  entitiesToRender.forEach(entity => {
    const { position } = entity.components.defaults;
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

    // display extras on player controlled character
    // if (entity.components.hasOwnProperty('userInput')) {
    //   let offsetX, offsetX2;
    //
    //   if (defaults.direction === -1) {
    //     offsetX = 5;
    //     offsetX2 = -appearance.size.width;
    //   } else {
    //     offsetX = appearance.size.width - 15;
    //     offsetX2 = appearance.size.width;
    //   }
    //
    //   ctx.fillStyle = 'white';
    //   ctx.fillRect(
    //     defaults.position.x + offsetX - Viewport.x,
    //     defaults.position.y + 5,
    //     10,
    //     10
    //   );
    //
    //   ctx.fillStyle = 'yellow';
    //   ctx.globalAlpha = 0.1;
    //   ctx.fillRect(
    //     defaults.position.x + offsetX2 - Viewport.x,
    //     defaults.position.y + 10,
    //     50,
    //     40
    //   );
    // }


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
