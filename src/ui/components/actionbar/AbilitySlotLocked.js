import React from 'react';

export const AbilitySlotLocked = (props) => {
  const ctrls_currentKey = props.controlsMap.get(props.index);

  return (
    <div className="actionbar__abilityslot-container actionbar__abilityslot-container--locked">
      <div className="actionbar__abilityslot-textnode--ctrl">{ctrls_currentKey}</div>
      <img src={require('assets/ui/icons/locked-ability-slot.png')} alt="ability" />
    </div>
  )
}
