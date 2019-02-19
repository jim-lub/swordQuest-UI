import { Entity, Components } from 'game/EntityComponentSystem';

export const block = (x, y, w, h, color, type) => {
  let entity = new Entity.Instance();

  entity.addComponent(new Components.Position(x, y));
  entity.addComponent(new Components.Appearance(w, h, color));
  entity.addComponent(new Components.Collision(w, h, type));

  return entity;
}

export const isPlayerControlledBlock = (x, y, w, h, color, type) => {
  let entity = new Entity.Instance();

  entity.addComponent(new Components.Position(x, y));
  entity.addComponent(new Components.Appearance(w, h, color));
  entity.addComponent(new Components.Player());
  entity.addComponent(new Components.Collision(w, h, type, 2));

  return entity;
}
