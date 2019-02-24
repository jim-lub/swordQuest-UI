import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestViewportChange } from 'interface/actions';

import AbilityNode from './AbilityNode';

import { Abilities } from 'config/abilities';

const AbilitiesPanel = (props) => {
  if (!props.activeComponents.abilitiesPanel) return null;
  const { enabledAbilitiesArr } = Abilities;

  return (
    <div className="abilitiespanel__wrapper">
      <div className="abilitiespanel__container">
        <div className="abilitiespanel__container--bg" />

        <div className="abilitiespanel__ability-wrapper">
          {enabledAbilitiesArr.map((ref_name, index) => {
            return <AbilityNode key={index} ref_name={ref_name} />
          })}
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerControls: state.playerControls.actionbar,
    actionbar: state.actionbar,
    activeComponents: state.viewport.components,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({requestViewportChange}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbilitiesPanel);
