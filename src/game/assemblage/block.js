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

export const fireball = (x, y) => {
  let entity = new Entity.Instance();

  entity.addComponent(new Components.Position(x, y));
  entity.addComponent(new Components.Appearance(10, 10, 'orange'));
  entity.addComponent(new Components.Ability('fireball', 'magic_fire_fireball', 250));

  return entity;
}

export const frostbolt = (x, y) => {
  let entity = new Entity.Instance();

  entity.addComponent(new Components.Position(x, y));
  entity.addComponent(new Components.Appearance(10, 10, 'blue'));
  entity.addComponent(new Components.Ability('frostbolt', 'magic_frost_frostbolt', 250));

  return entity;
}

export const swordstrike = (x, y) => {
  let entity = new Entity.Instance();

  entity.addComponent(new Components.Position(x, y));
  entity.addComponent(new Components.Appearance(10, 10, 'brown'));
  entity.addComponent(new Components.Ability('swordstrike', 'melee_warrior_swordstrike', 250));

  return entity;
}

export const heal = (x, y) => {
  let entity = new Entity.Instance();

  entity.addComponent(new Components.Position(x, y));
  entity.addComponent(new Components.Appearance(10, 10, 'green'));
  entity.addComponent(new Components.Ability('heal', 'magic_restoration_heal', 250));

  return entity;
}
