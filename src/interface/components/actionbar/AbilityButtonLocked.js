import React from 'react';

const AbilityButtonLocked = (props) => {
  return (
    <button
      className="actionbar__abilityslot-container"
      disabled={props.isBeingModified ||props.disabled}
    >
      <div className="actionbar__abilityslot-textnode--ctrl">{props.ctrl}</div>
      <img src={require('assets/ui/icons/locked-ability-slot.png')} alt="ability" />
    </button>
  )
}

export default AbilityButtonLocked
