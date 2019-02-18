import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { startCanvasGameLoop, pauseCanvasGameLoop } from 'interface/actions/'
import { requestViewportChange } from 'interface/actions';

const DataBar = (props) => {
  return (
      <div className="databar__wrapper">
        <div className="databar__container">
          {(props.isPlaying) ? <button onClick={() => props.actions.requestViewportChange('pause')}>Pause</button> : <button onClick={() => props.actions.requestViewportChange('play')}>Play</button>}
        </div>
      </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({startCanvasGameLoop, pauseCanvasGameLoop, requestViewportChange}, dispatch)
  }
}

const mapStateToProps = state => {
  return {
    isPlaying: state.canvas.isPlaying
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataBar);
