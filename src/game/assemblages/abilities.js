import { Entity, Components } from 'game/EntityComponentSystem';

import { Abilities } from 'config/abilities';

export const ability = (type) => {
  let ability = new Entity.create();

  ability.addComponent(
    Components.isAbility({
      name: type
    })
  );

  ability.addComponent(
    Components.hasAttackPoints({
      patterns: Abilities.magic.fire.fireball.patterns
    })
  );

  return ability;
}
