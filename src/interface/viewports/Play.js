import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { startCanvasGameLoop, enableActionbar, setActiveComponents } from 'interface/actions';

const Play = (props) => {
  const {startCanvasGameLoop, setActiveComponents } = props.actions;

  useEffect(() => {
    console.log('Playing');
    setActiveComponents({
      actionbar: true,
      abilitiesPanel: false
    });
    startCanvasGameLoop();
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
    actions: bindActionCreators({startCanvasGameLoop, enableActionbar, setActiveComponents}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);
