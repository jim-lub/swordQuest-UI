import { Entity, Components } from 'game/EntityComponentSystem';

export const ability = (type) => {
  let ability = new Entity.create();

  ability.addComponent(
    Components.isAbility({
      name: type
    })
  );

  ability.addComponent(
    Components.isCollider({
      width: 5,
      height: 5
    })
  );

  return ability;
}
