import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestViewportChange } from 'interface/actions';

const AbilitiesPanel = (props) => {
  console.log(props.activeComponents);
  if (!props.activeComponents.abilitiesPanel) return null;

  return (
    <div className="abilitiespanel__wrapper">
      <div className="abilitiespanel__container">
        <div className="abilitiespanel__container--bg" />

        <div className="abilitiespanel__statsdisplay">
          <div className="abilitiespanel__statsdisplay--row">
            <span className="CLRS__class-fire--color">Fire: </span>
            <span> 3213</span>
          </div>
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerControls: state.playerControls.actionbar,
    actionbar: state.actionbar,
    activeComponents: state.viewport.components
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({requestViewportChange}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbilitiesPanel);
