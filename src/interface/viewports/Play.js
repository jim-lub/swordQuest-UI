import React from 'react';

import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { startCanvasGameLoop, enableActionbar } from 'interface/actions';

const Play = (props) => {
  const {startCanvasGameLoop, enableActionbar } = props.actions;

  useEffect(() => {
    console.log('Playing');
    startCanvasGameLoop();
    enableActionbar();
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
    actions: bindActionCreators({startCanvasGameLoop, enableActionbar}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);
