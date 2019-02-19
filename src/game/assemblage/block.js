import { Entity, Components } from 'game/EntityComponentSystem';

export const block = (x, y, w, h, color) => {
  let entity = new Entity.Instance();

  entity.addComponent(new Components.Position(x, y));
  entity.addComponent(new Components.Appearance(w, h, color));
  entity.addComponent(new Components.Collision(50, 50));

  return entity;
}

export const isPlayerControlledBlock = (x, y, w, h, color) => {
  let entity = new Entity.Instance();

  entity.addComponent(new Components.Position(x, y));
  entity.addComponent(new Components.Appearance(w, h, color));
  entity.addComponent(new Components.Player());
  entity.addComponent(new Components.Collision(40, 40, 1));

  return entity;
}
