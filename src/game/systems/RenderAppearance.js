import { ECSGlobals } from 'game/EntityComponentSystem';

export const RenderAppearance = (ctx) => {
  const { EntitiesPool } = ECSGlobals;

  const entitiesToRender = EntitiesPool.filter(entity => entity.components.hasOwnProperty('appearance'));

  entitiesToRender.forEach(entity => {
    const { defaults, appearance } = entity.components;

    if (appearance.color !== ctx.fillStyle) {
        ctx.fillStyle = appearance.color;
    }

    ctx.fillRect(
      defaults.position.x,
      defaults.position.y,
      appearance.size.width,
      appearance.size.height
    );
  });
}
