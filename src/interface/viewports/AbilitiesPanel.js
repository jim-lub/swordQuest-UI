import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { pauseCanvasGameLoop, disableActionbar, setActiveComponents } from 'interface/actions';

const AbilitiesPanel = (props) => {
  const { pauseCanvasGameLoop, setActiveComponents } = props.actions;

  useEffect(() => {
    console.log('Paused');
    setActiveComponents({
      actionbar: true,
      abilitiesPanel: true
    });
    pauseCanvasGameLoop();
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
    actions: bindActionCreators({pauseCanvasGameLoop, disableActionbar, setActiveComponents}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AbilitiesPanel);
