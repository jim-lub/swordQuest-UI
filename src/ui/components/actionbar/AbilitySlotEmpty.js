import React from 'react';

export const AbilitySlotEmpty = (props) => {
  const ctrls_currentKey = props.controlsMap.get(props.index);

  return (
    <div className="actionbar__abilityslot-container actionbar__abilityslot-container--locked">
      <div className="actionbar__abilityslot-textnode--ctrl">{ctrls_currentKey}</div>
      <img src={require('assets/ui/icons/empty-ability-slot-2.png')} alt="empty" />
    </div>
  )
}
