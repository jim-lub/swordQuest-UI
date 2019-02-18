import React from 'react';

import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { pauseCanvasGameLoop, disableActionbar } from 'interface/actions';

const Pause = (props) => {
  const { pauseCanvasGameLoop, disableActionbar } = props.actions;

  useEffect(() => {
    console.log('Paused');
    pauseCanvasGameLoop();
    disableActionbar();
  }, [])

  return null;
}

const mapStateToProps = state => {
  return {
    canvas: state.canvas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({pauseCanvasGameLoop, disableActionbar}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pause);
