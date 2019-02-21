import { Entity, Components } from 'game/EntityComponentSystem';

export const ability = (type) => {
  let ability = new Entity.create();

  ability.addComponent(
    Components.isAbility({
      name: type
    })
  );
  
  return ability;
}
