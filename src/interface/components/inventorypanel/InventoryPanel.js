import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestViewportChange } from 'interface/actions';

import { ClosePanelButton } from 'interface/components';

const InventoryPanel = (props) => {
  if (!props.activeComponents.inventoryPanel) return null;

  return (
    <div className="inventorypanel__wrapper">
      <div className="inventorypanel__container">
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

export default connect(mapStateToProps, mapDispatchToProps)(InventoryPanel);
