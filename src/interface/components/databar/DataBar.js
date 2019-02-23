import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return {
    isPlaying: state.canvas.isPlaying
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({requestViewportChange}, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DataBar);
