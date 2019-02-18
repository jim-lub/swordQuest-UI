import React from 'react';

import { useEffect } from 'react';
import { connect } from 'react-redux';


import { init, start, stop } from 'game/Game';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.setContext = this.setContext.bind(this);
  }

  setContext(r) {
    this.ctx = r.getContext("2d");
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      start();
    } else {
      stop();
    }
  }

  componentDidMount() {
    init(this.ctx);
  }

  render() {
    return (
      <div id="container" className="canvas__wrapper">
        <canvas
          width={940}
          height={540}
          status={this.props.isPlaying.toString()}
          ref={this.setContext}/>
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isPlaying: state.canvas.isPlaying,
  }
}

export default connect(mapStateToProps)(Canvas);
