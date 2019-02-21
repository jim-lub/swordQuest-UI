import { ECSGlobals } from 'game/EntityComponentSystem';
import { Viewport } from 'game/systems/Camera';

export const RenderAppearance = (ctx) => {
  const { EntitiesPool } = ECSGlobals;

  const entitiesToRender = EntitiesPool.filter(entity => entity.components.hasOwnProperty('appearance'));

  entitiesToRender.forEach(entity => {
    const { defaults, appearance } = entity.components;

    if (appearance.color !== ctx.fillStyle) {
        ctx.fillStyle = appearance.color;
    }

    ctx.globalAlpha = appearance.opacity;

    ctx.fillRect(
      defaults.position.x - Viewport.x,
      defaults.position.y,
      appearance.size.width,
      appearance.size.height
    );

    // display extras on player controlled character
    if (entity.components.hasOwnProperty('userInput')) {
      let offsetX, offsetX2;

      if (defaults.direction === -1) {
        offsetX = 5;
        offsetX2 = -appearance.size.width;
      } else {
        offsetX = appearance.size.width - 15;
        offsetX2 = appearance.size.width;
      }

      ctx.fillStyle = 'white';
      ctx.fillRect(
        defaults.position.x + offsetX - Viewport.x,
        defaults.position.y + 5,
        10,
        10
      );

      ctx.fillStyle = 'yellow';
      ctx.globalAlpha = 0.1;
      ctx.fillRect(
        defaults.position.x + offsetX2 - Viewport.x,
        defaults.position.y + 10,
        50,
        40
      );
    }
    
    ctx.globalAlpha = 1;
  });
}
