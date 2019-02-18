import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { startCanvasGameLoop, pauseCanvasGameLoop } from 'interface/actions/'

const DataBar = (props) => {
  return (
      <div className="databar__wrapper">
        <div className="databar__container">
          {(props.isPlaying) ? <button onClick={props.actions.pauseCanvasGameLoop}>Pause</button> : <button onClick={props.actions.startCanvasGameLoop}>Play</button>}
        </div>
      </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({startCanvasGameLoop, pauseCanvasGameLoop}, dispatch)
  }
}

const mapStateToProps = state => {
  return {
    isPlaying: state.canvas.isPlaying
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataBar);
