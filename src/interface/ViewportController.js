import React from 'react';

import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Play, Pause, AbilitiesPanel } from 'interface/viewports'

import {
  setCurrentViewport,
  requestViewportChange,
  setActiveComponents,
  startCanvasGameLoop,
  pauseCanvasGameLoop
} from 'interface/actions';
// import { startCanvasGameLoop, enableActionbar, setActiveComponents } from 'interface/actions';

const ViewportController = (props) => {
  const { current, request } = props.viewport;
  const {
    setCurrentViewport,
    setActiveComponents,
    startCanvasGameLoop,
    pauseCanvasGameLoop
  } = props.actions;


  const checkIfValidRequestAndApply = (actionName) => {
    const action = transitions[current][actionName];

    if (action) {
      action.apply();
    }
  }

  const transitions = {
    'play': {
      component: () => {
        setActiveComponents({
          actionbar: true,
          abilitiesPanel: false,
          inventoryPanel: false,
          mapPanel: false,
          questPanel: false,
          settingsPanel: false,
          achievementsPanel: false
        });
        startCanvasGameLoop();
      },
      pause() { setCurrentViewport('pause') },
      abilitiesPanel() { setCurrentViewport('abilitiesPanel') },
      inventoryPanel() { setCurrentViewport('inventoryPanel') },
      // mapPanel() { setCurrentViewport('mapPanel') },
      questPanel() { setCurrentViewport('questPanel') },
      settingsPanel() { setCurrentViewport('settingsPanel') },
      // achievementsPanel() { setCurrentViewport('achievementsPanel') }
    },
    'pause': {
      component: () => {
        setActiveComponents({
          actionbar: false,
          abilitiesPanel: false,
          inventoryPanel: false,
          mapPanel: false,
          questPanel: false,
          settingsPanel: false,
          achievementsPanel: false
        });
        pauseCanvasGameLoop();
      },
      play() { setCurrentViewport('play') },
      abilitiesPanel() { setCurrentViewport('abilitiesPanel') },
      inventoryPanel() { setCurrentViewport('inventoryPanel') },
      // mapPanel() { setCurrentViewport('mapPanel') },
      questPanel() { setCurrentViewport('questPanel') },
      settingsPanel() { setCurrentViewport('settingsPanel') },
      // achievementsPanel() { setCurrentViewport('achievementsPanel') }
    },
    'abilitiesPanel': {
      component: () => {
        setActiveComponents({
          actionbar: true,
          abilitiesPanel: true,
          inventoryPanel: false,
          mapPanel: false,
          questPanel: false,
          settingsPanel: false,
          achievementsPanel: false
        });
        pauseCanvasGameLoop();
      },
      play() { setCurrentViewport('play') },
      inventoryPanel() { setCurrentViewport('inventoryPanel') },
      // mapPanel() { setCurrentViewport('mapPanel') },
      questPanel() { setCurrentViewport('questPanel') },
      settingsPanel() { setCurrentViewport('settingsPanel') },
      // achievementsPanel() { setCurrentViewport('achievementsPanel') }
    },
    'inventoryPanel': {
      component: () => {
        setActiveComponents({
          actionbar: false,
          abilitiesPanel: false,
          inventoryPanel: true,
          mapPanel: false,
          questPanel: false,
          settingsPanel: false,
          achievementsPanel: false
        });
        pauseCanvasGameLoop();
      },
      play() { setCurrentViewport('play') },
      abilitiesPanel() { setCurrentViewport('abilitiesPanel') },
      // mapPanel() { setCurrentViewport('mapPanel') },
      questPanel() { setCurrentViewport('questPanel') },
      settingsPanel() { setCurrentViewport('settingsPanel') },
      // achievementsPanel() { setCurrentViewport('achievementsPanel') }
    },
    'mapPanel': {
      component: () => {
        setActiveComponents({
          actionbar: false,
          abilitiesPanel: false,
          inventoryPanel: false,
          mapPanel: true,
          questPanel: false,
          settingsPanel: false,
          achievementsPanel: false
        });
        pauseCanvasGameLoop();
      },
      play() { setCurrentViewport('play') },
      abilitiesPanel() { setCurrentViewport('abilitiesPanel') },
      inventoryPanel() { setCurrentViewport('inventoryPanel') },
      questPanel() { setCurrentViewport('questPanel') },
      settingsPanel() { setCurrentViewport('settingsPanel') },
      // achievementsPanel() { setCurrentViewport('achievementsPanel') }
    },
    'questPanel': {
      component: () => {
        setActiveComponents({
          actionbar: false,
          abilitiesPanel: false,
          inventoryPanel: false,
          mapPanel: false,
          questPanel: true,
          settingsPanel: false,
          achievementsPanel: false
        });
        pauseCanvasGameLoop();
      },
      play() { setCurrentViewport('play') },
      abilitiesPanel() { setCurrentViewport('abilitiesPanel') },
      inventoryPanel() { setCurrentViewport('inventoryPanel') },
      // mapPanel() { setCurrentViewport('mapPanel') },
      settingsPanel() { setCurrentViewport('settingsPanel') },
      // achievementsPanel() { setCurrentViewport('achievementsPanel') }
    },
    'settingsPanel': {
      component: () => {
        setActiveComponents({
          actionbar: false,
          abilitiesPanel: false,
          inventoryPanel: false,
          mapPanel: false,
          questPanel: false,
          settingsPanel: true,
          achievementsPanel: false
        });
        pauseCanvasGameLoop();
      },
      play() { setCurrentViewport('play') },
      abilitiesPanel() { setCurrentViewport('abilitiesPanel') },
      inventoryPanel() { setCurrentViewport('inventoryPanel') },
      // mapPanel() { setCurrentViewport('mapPanel') },
      questPanel() { setCurrentViewport('questPanel') },
      // achievementsPanel() { setCurrentViewport('achievementsPanel') }
    },
    'achievementsPanel': {
      component: () => {
        setActiveComponents({
          actionbar: false,
          abilitiesPanel: false,
          inventoryPanel: false,
          mapPanel: false,
          questPanel: false,
          settingsPanel: false,
          achievementsPanel: true
        });
        pauseCanvasGameLoop();
      },
      play() { setCurrentViewport('play') },
      abilitiesPanel() { setCurrentViewport('abilitiesPanel') },
      inventoryPanel() { setCurrentViewport('inventoryPanel') },
      // mapPanel() { setCurrentViewport('mapPanel') },
      questPanel() { setCurrentViewport('questPanel') },
      settingsPanel() { setCurrentViewport('settingsPanel') }
    },
  }

  useEffect(
    () => {
      checkIfValidRequestAndApply(request);
    },
  [request]);

  useEffect(
    () => {
      transitions[current].component();
    }, [current, request]);

  return null;
};

const mapStateToProps = state => {
  return {
    viewport: state.viewport
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      setCurrentViewport,
      requestViewportChange,
      setActiveComponents,
      startCanvasGameLoop,
      pauseCanvasGameLoop
    }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewportController);
