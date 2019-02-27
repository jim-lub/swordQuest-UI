import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestViewportChange } from 'interface/actions';

import { ClosePanelButton } from 'interface/components';

const SettingsPanel = (props) => {
  if (!props.activeComponents.settingsPanel) return null;

  return (
    <div className="settingspanel__wrapper">
      <div className="settingspanel__container">
        <ClosePanelButton />

      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeComponents: state.viewport.components,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({requestViewportChange}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
