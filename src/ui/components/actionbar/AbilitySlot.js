import React from 'react';

import { useState, useEffect } from 'react';

import { Abilities } from 'config/abilities';
import { Utils } from 'ui/utils';

export const AbilitySlot = (props) => {
  const [cooldown, setCooldown] = useState(0);

  // setup vars
  const currentAbility = Abilities[props.meta.combatType][props.meta.class][props.meta.ability];
  const ctrls_currentKey = props.controlsMap.get(props.index);
  const abilitySlotID = `abilitySlot-ID-${props.index}`;
  const abilitySlotCooldownID = `abilitySlotCooldown-ID-${props.index}`;

  // cooldown management
  const cooldownTimer = () => setCooldown(cooldown - 1);
  useEffect(() => {
    if (cooldown <= 0) {
      let el = document.getElementById(abilitySlotCooldownID);
      el.classList.remove("actionbar__abilityslot-overlay--cooldown");
      return;
    }

    const cooldownTimerID = setInterval(cooldownTimer, 1000);
    return () => clearInterval(cooldownTimerID);
  }, [cooldown]);

  // setup event listeners
  useEffect(() => {
    Utils.Dom.newListener().keydown(handleKeyPress);
    return () => Utils.Dom.removeListener().keydown(handleKeyPress)
  }, [cooldown, props.globalCooldown]);

  useEffect(() => {
    Utils.Dom.newListener().mouseover(abilitySlotID, handleMouseOver);
    return () => Utils.Dom.removeListener().mouseover(abilitySlotID, handleMouseOver)
  }, [currentAbility]);

  // keyboard and mouse event handlers
  const triggerAbility = () => {
    props.onAbilityTrigger();
    setCooldown(currentAbility.cooldown);
    let el = document.getElementById(abilitySlotCooldownID);
    el.classList.add("actionbar__abilityslot-overlay--cooldown");
    el.style.animationDuration = `${currentAbility.cooldown}s`;
  }

  const handleClick = () => {
    triggerAbility();
  }

  const handleKeyPress = (event) => {
    // console.log(`${abilitySlotID}  ---  ${cooldown}`);
    if (isOnCooldown(cooldown, props.globalCooldown)) return;

    if (ctrls_currentKey === Utils.Ctrls.keyCodeToKey(event.keyCode)) {
      triggerAbility();
    }
  }

  const handleMouseOver = () => {
    props.setTooltipInformation({
      title: currentAbility.display_name,
      description: currentAbility.description,
      data: {
        combatType: props.meta.combatType,
        class: props.meta.class,
        actionType: currentAbility.actionType
      }
    });
  }

  return (
    <button
      id={abilitySlotID}
      className="actionbar__abilityslot-container"
      disabled={isOnCooldown(cooldown, props.globalCooldown)}
      onClick={handleClick}
    >
      <div className="actionbar__abilityslot-textnode--ctrl">{ctrls_currentKey}</div>
      <div id={abilitySlotCooldownID}></div>
      <div className="actionbar__abilityslot-textnode--cooldown">{(cooldown !== 0) ? cooldown : ""}</div>
      <img src={currentAbility.icon} alt={currentAbility.ref_name} />
    </button>
  )
}

const isOnCooldown = (cooldown, globalCooldown) => {
  if (cooldown > 0) {
    return true;
  }

  if (globalCooldown > 0) {
    return true;
  }

  return false;
}
