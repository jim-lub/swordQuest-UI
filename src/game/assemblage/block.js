import { Entity, Components } from 'game/EntityComponentSystem';

export const block = (x, y, w, h, color) => {
  let entity = new Entity.Instance();

  entity.addComponent(new Components.Position({x, y}));
  entity.addComponent(new Components.Render(w, h, color));

  return entity;
}

export const isPlayerControlledBlock = (x, y, w, h, color) => {
  let entity = new Entity.Instance();

  entity.addComponent(new Components.Position({x, y}));
  entity.addComponent(new Components.Render(w, h, color));
  entity.addComponent(new Components.Player());

  return entity;
}
