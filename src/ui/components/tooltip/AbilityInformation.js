import React from 'react';

export const AbilityInformation = (props) => {
  return (
    <div>
      <div className="tooltip__segment--title">{props.title}</div>
      <div className="tooltip__segment--types">
        <span className={`tooltip__segment--types-span CLRS__combatType-${props.combatType}--bgcolor`}>{props.combatType}</span>
        <span className={`tooltip__segment--types-span CLRS__class-${props.class}--bgcolor`}>{props.class}</span>
        <span className={`tooltip__segment--types-span CLRS__actionType-${props.actionType}--bgcolor`}>{props.actionType}</span>
      </div>
      <div className="tooltip__segment--description">{props.description}</div>
    </div>
  )
}
