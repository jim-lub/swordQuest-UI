import React from 'react';
import { DropTarget } from 'react-dnd';
import { useEffect, useRef } from 'react';

import { useCooldown } from 'interface/hooks';

import TooltipEmitter from 'interface/hooks/useTooltip';

import { Abilities } from 'config/abilities';
import { Utils } from 'interface/utils';
import { InterfaceConnector } from 'game/InterfaceConnector';

const AbilityButton = (props) => {
  const { cooldown, setCooldown } = useCooldown(0);
  const cooldownAnimationRef = useRef(null);
  const { connectDropTarget } = props;
  const { combatType, className, abilityName } = Abilities.refNameToComponents(props.ref_name);
  const abilityInformation = Abilities[combatType][className][abilityName];

  useEffect(() => {
    Utils.Dom.newListener().keydown(handleKeyPress);
    return () => Utils.Dom.removeListener().keydown(handleKeyPress)
  });

  const handleClick = () => {
    triggerAbility();
  }

  const handleKeyPress = (event) => {
    if (props.ctrl === Utils.Ctrls.keyCodeToKey(event.keyCode)) {
      triggerAbility();
    }
  }

  const triggerAbility = () => {
    if (isDisabled() || props.isBeingModified) return;
    InterfaceConnector.sendAbilityToQueue(props.ref_name);
    props.handleTriggeredAbility();
    setCooldown(abilityInformation.cooldown);
    cooldownAnimationRef.current.classList.add("actionbar__abilityslot-overlay--cooldown");
    cooldownAnimationRef.current.style.animationDuration = `${abilityInformation.cooldown}s`;
  }

  const isDisabled = () => {
    if (props.disabled) return true;
    if (cooldown > 0) return true;
    if (props.globalCooldown > 0) return true;
    return false;
  }

  useEffect(() => {
    if (cooldown <= 0) {
      cooldownAnimationRef.current.classList.remove("actionbar__abilityslot-overlay--cooldown");
    }
  }, [cooldown]);

  useEffect(() => {
    if (!props.getDropResult) return;

    if (props.getDropResult.abilitySlotIndex === props.index) {
      console.log(props.index, props.getItem.ref_name);
      props.onAbilitySwitch(props.index, props.getItem.ref_name);
    }
  }, [props.getDropResult]);

  const divStyle = (props.isOver && props.canDrop) ? {borderColor: '#a7e25a'} : {};

  return connectDropTarget(
    <button
      id={props.ref_name}
      className="actionbar__abilityslot-container"
      onClick={handleClick}
      disabled={isDisabled()}
      style={divStyle}
    >
      <div className="actionbar__abilityslot-textnode--ctrl">{props.ctrl}</div>
      <div ref={cooldownAnimationRef}></div>
      <div className="actionbar__abilityslot-textnode--cooldown">{(cooldown !== 0) ? cooldown : ""}</div>
      <img src={abilityInformation.icon} alt={abilityInformation.ref_name} />
      <TooltipEmitter id={props.ref_name} ref_name={props.ref_name} />
    </button>
  )
}

const dropTarget = {
  drop(props) {
    return {
      abilitySlotIndex: props.index
    }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    getItem: monitor.getItem(),
    getDropResult: monitor.getDropResult()
  }
}

export default DropTarget('ABILITY', dropTarget, collect)(AbilityButton);
