import React from 'react';
import { Abilities } from 'config/abilities';

export const AbilityInformation = (props) => {
  const { combatType, className, abilityName } = Abilities.refNameToComponents(props.data);
  const abilityInformation = Abilities[combatType][className][abilityName];

  return (
    <div>
      <div className="tooltip__segment--title">{abilityInformation.display_name}</div>
      <div className="tooltip__segment--types">
        <span className={`tooltip__segment--types-span CLRS__combatType-${combatType}--bgcolor`}>{combatType}</span>
        <span className={`tooltip__segment--types-span CLRS__class-${className}--bgcolor`}>{className}</span>
        <span className={`tooltip__segment--types-span CLRS__actionType-${abilityInformation.actionType}--bgcolor`}>{abilityInformation.actionType}</span>
      </div>
      <div className="tooltip__segment--description">{abilityInformation.description}</div>
    </div>
  )
}
