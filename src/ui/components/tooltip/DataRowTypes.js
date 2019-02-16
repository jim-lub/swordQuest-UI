import React from 'react';

export const DataRowTypes = (props) => {
  return (
    <div className="tooltip__segment--types">
      <span className={`tooltip__segment--types-span CLRS__combatType-${props.combatType}--bgcolor`}>{props.combatType}</span>
      <span className={`tooltip__segment--types-span CLRS__class-${props.class}--bgcolor`}>{props.class}</span>
      <span className={`tooltip__segment--types-span CLRS__actionType-${props.actionType}--bgcolor`}>{props.actionType}</span>
    </div>
  )
}
