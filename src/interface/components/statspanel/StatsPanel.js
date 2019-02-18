import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestViewportChange } from 'interface/actions';

const StatsPanel = () => {
  return (
    <div className="statspanel__wrapper">
      <div className="statspanel__container">
        <div className="statspanel__container--bg" />

        <div className="statspanel__statsdisplay">
          <div className="statspanel__statsdisplay--row">
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
    canvas: state.canvas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({requestViewportChange}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsPanel);
