import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestViewportChange } from 'interface/actions';

import { ClosePanelButton } from 'interface/components';

const QuestPanel = (props) => {
  if (!props.activeComponents.questPanel) return null;

  return (
    <div className="questpanel__wrapper">
      <div className="questpanel__container">
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestPanel);
