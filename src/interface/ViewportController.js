import React from 'react';

import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Play, Pause } from 'interface/viewports'

import { setCurrentViewport, requestViewportChange } from 'interface/actions';

const ViewportController = (props) => {
  const { current, request } = props.viewport;
  const { setCurrentViewport } = props.actions;

  const checkIfValidRequestAndApply = (actionName) => {
    const action = transitions[current][actionName];

    if (action) {
      action.apply();
    }
  }

  const transitions = {
    'play': {
      component: <Play />,
      pause() { setCurrentViewport('pause') }
    },
    'pause': {
      component: <Pause />,
      play() { setCurrentViewport('play') }
    }
  }

  useEffect(
    () => {
      checkIfValidRequestAndApply(request);
    },
  [request]);

  return transitions[current].component;
};

const mapStateToProps = state => {
  return {
    viewport: state.viewport
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({setCurrentViewport, requestViewportChange}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewportController);
