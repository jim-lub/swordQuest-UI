import React from 'react';

export const AbilitySlotEmpty = (props) => {
  const ctrls_currentKey = props.controlsMap.get(props.index);

  return (
    <div className="UI-actionbar-ability-container">
      <div className="UI-actionbar-ability-control-text">{ctrls_currentKey}</div>
      <img src={require('assets/ui/icons/empty-ability-slot-2.png')} alt="empty" />
    </div>
  )
}
