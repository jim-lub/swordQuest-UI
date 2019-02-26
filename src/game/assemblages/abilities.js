import { Entity, Components } from 'game/EntityComponentSystem';

import { Abilities } from 'config/abilities';

export const ability = (type) => {
  let ability = new Entity.create();

  ability.addComponent(
    Components.isAbility({
      name: type
    })
  );

  const { combatType, className, abilityName } = Abilities.refNameToComponents(type);

  if (Abilities[combatType][className][abilityName].active) {
    ability.addComponent(
      Components.hasAttackPoints({
        patterns: Abilities[combatType][className][abilityName].patterns
      })
    );
  }


  return ability;
}
