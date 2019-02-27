import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestViewportChange } from 'interface/actions';

const ClosePanelButton = (props) => {

  return (
    <div className="closepanelbutton__wrapper">
      <button
        className="closepanelbutton__button"
        onClick={() => props.actions.requestViewportChange('play')}
      >
        Close
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({requestViewportChange}, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(ClosePanelButton);
