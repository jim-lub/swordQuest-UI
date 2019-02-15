import React from 'react';

export const DataRowTypes = (props) => {
  return (
    <div className="UI-tooltip-type-container">
      <span className={`UI-tooltip-type-span COLORS-backgroundcolor-combatType-${props.combatType}`}>{props.combatType}</span>
      <span className={`UI-tooltip-type-span COLORS-backgroundcolor-class-${props.class}`}>{props.class}</span>
      <span className={`UI-tooltip-type-span COLORS-backgroundcolor-actionType-${props.actionType}`}>{props.actionType}</span>
    </div>
  )
}
