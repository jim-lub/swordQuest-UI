import React from 'react';

import { useEffect } from 'react';

import { Utils } from 'ui/utils';

export const AbilitySlotLocked = (props) => {
  const ctrls_currentKey = props.controlsMap.get(props.index);

  const abilitySlotID = `abilitySlot-ID-${props.index}`;

  useEffect(() => {
    Utils.Dom.newListener().mouseover(abilitySlotID, handleMouseOver);
    return () => Utils.Dom.removeListener().mouseover(abilitySlotID, handleMouseOver)
  }, []);

  useEffect(() => {
    Utils.Dom.newListener().mouseout(abilitySlotID, handleMouseOut);
    return () => Utils.Dom.removeListener().mouseout(abilitySlotID, handleMouseOut)
  }, []);

  const handleMouseOver = () => {
    props.setTooltipInformation({
      informationType: "oneline-information",
      data: {
        title: "Unlocked at level ?"
      }
    });
  }

  const handleMouseOut = () => {
    props.setTooltipInformation({
      informationType: undefined,
      data: {}
    });
  }

  return (
    <div id={abilitySlotID} className="actionbar__abilityslot-container actionbar__abilityslot-container--locked">
      <div className="actionbar__abilityslot-textnode--ctrl">{ctrls_currentKey}</div>
      <img src={require('assets/ui/icons/locked-ability-slot.png')} alt="ability" />
    </div>
  )
}
