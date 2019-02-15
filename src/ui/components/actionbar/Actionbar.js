import React from 'react';

import { useState, useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setTooltipInformation } from 'ui/actions';

import { AbilitySlot, AbilitySlotEmpty, AbilitySlotLocked } from './';

const Actionbar = (props) => {
  const [globalCooldown, setGlobalCooldown] = useState(0);
  const { playerControls, actionbarSetup } = props;

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
    <div className="UI-actionbar-container">
      {renderAbilitySlots(playerControls, actionbarSetup, handleTriggeredAbility, globalCooldown, props.actions.setTooltipInformation)}
    </div>
  )
}

const renderAbilitySlots = (playerControls, actionbarSetup, handleTriggeredAbility, globalCooldown, setTooltipInformation) => {
  let actionbar;

  if (!actionbarSetup) {
      actionbar = [];
  } else {
    actionbar = [...actionbarSetup.abilitiesMap.values()]
  }

  return actionbar.map((abilityMetaData, index) => {

    if (abilityMetaData.status === 'active') {
      return (
        <AbilitySlot
          key={index}
          index={index}
          meta={abilityMetaData}
          globalCooldown={globalCooldown}

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

          {...playerControls}
        />
      )
    }

    return (
      <AbilitySlotLocked
        key={index}
        index={index}

        {...playerControls}
      />
    )
  });
}

const mapStateToProps = state => {
  return {
    playerControls: state.playerControls.actionbar,
    actionbarSetup: state.actionbarSetup.abilities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({setTooltipInformation}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actionbar);
