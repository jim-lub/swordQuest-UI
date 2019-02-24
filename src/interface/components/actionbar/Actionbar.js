import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { useCooldown } from 'interface/hooks';

import { setTooltipInformation, setActionbarAbilities } from 'interface/actions';

import {
  AbilityButton,
  AbilityButtonEmpty,
  AbilityButtonLocked
} from './';

const Actionbar = (props) => {
  const { cooldown, setCooldown } = useCooldown(0);
  let { playerControls, actionbar } = props;

  const handleTriggeredAbility = () => {
    setCooldown(1);
  }

  const onAbilitySwitch = (abilitySlotID, abilityName) => {
    actionbar.abilities.set(abilitySlotID, abilityName);
    props.actions.setActionbarAbilities(actionbar.abilities);
  }

  return (
    <div className="actionbar__wrapper">
      <div className="actionbar__container">
      {[...actionbar.abilities.keys()].map(key => {
          if (actionbar.abilities.get(key) === 'locked') {
            return (
              <AbilityButtonLocked
                key={key}
                index={key}
                ctrl={playerControls.get(key)}
                ref_name={actionbar.abilities.get(key)}
                disabled={!props.isEnabled}
                isBeingModified={props.isBeingModified}

                onAbilitySwitch={onAbilitySwitch}
              />
            );
          }

          if (actionbar.abilities.get(key) === 'empty') {
            return (
              <AbilityButtonEmpty
                key={key}
                index={key}
                ctrl={playerControls.get(key)}
                ref_name={actionbar.abilities.get(key)}
                disabled={!props.isEnabled}
                isBeingModified={props.isBeingModified}

                onAbilitySwitch={onAbilitySwitch}
              />
            );
          }

          return (
            <AbilityButton
              key={key}
              index={key}
              ctrl={playerControls.get(key)}
              ref_name={actionbar.abilities.get(key)}
              globalCooldown={cooldown}
              disabled={!props.isEnabled}
              isBeingModified={props.isBeingModified}

              onAbilitySwitch={onAbilitySwitch}
              handleTriggeredAbility={handleTriggeredAbility}
            />
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    playerControls: state.playerControls.actionbar,
    actionbar: state.actionbar,
    isEnabled: state.viewport.components.actionbar,
    isBeingModified: state.viewport.components.abilitiesPanel,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({setTooltipInformation, setActionbarAbilities}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actionbar);
