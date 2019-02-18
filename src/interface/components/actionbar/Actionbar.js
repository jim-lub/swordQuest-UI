import React from 'react';

import { useState, useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setTooltipInformation } from 'interface/actions';

import { AbilitySlot, AbilitySlotEmpty, AbilitySlotLocked } from './';

const Actionbar = (props) => {
  const [globalCooldown, setGlobalCooldown] = useState(0);
  const { playerControls, actionbar } = props;

  // cooldown management
  const cooldownTimer = () => setGlobalCooldown(globalCooldown - 1);
  useEffect(() => {
    if (globalCooldown <= 0) return;

    const cooldownTimerID = setInterval(cooldownTimer, 1000);
    return () => clearInterval(cooldownTimerID);
  }, [globalCooldown]);

  const handleTriggeredAbility = () => {
    setGlobalCooldown(1);
  }

  return (
    <div className="actionbar__wrapper">
      <div className="actionbar__container">
        {renderAbilitySlots(playerControls, actionbar.abilities, handleTriggeredAbility, props.actionbar.enabled, globalCooldown, props.actions.setTooltipInformation)}
      </div>
    </div>
  )
}

const renderAbilitySlots = (playerControls, actionbar, handleTriggeredAbility, isEnabled, globalCooldown, setTooltipInformation) => {
  actionbar = (!actionbar) ? [] : actionbar;
  return actionbar.map((abilityMetaData, index) => {

    if (abilityMetaData.status === 'active') {
      return (
        <AbilitySlot
          key={index}
          index={index}
          meta={abilityMetaData}
          globalCooldown={globalCooldown}

          isEnabled={isEnabled}

          onAbilityTrigger={handleTriggeredAbility}
          setTooltipInformation={setTooltipInformation}

          {...playerControls}
        />
      )
    }

    if (abilityMetaData.status === 'empty') {
      return (
        <AbilitySlotEmpty
          key={index}
          index={index}

          setTooltipInformation={setTooltipInformation}

          {...playerControls}
        />
      )
    }

    return (
      <AbilitySlotLocked
        key={index}
        index={index}

        setTooltipInformation={setTooltipInformation}

        {...playerControls}
      />
    )
  });
}

const mapStateToProps = state => {
  return {
    playerControls: state.playerControls.actionbar,
    actionbar: state.actionbar,
    canvas: state.canvas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({setTooltipInformation}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actionbar);
