import React from 'react';

import { connect } from 'react-redux';

const DataBar = (props) => {
  return (
      <div className="databar__wrapper">
        <div className="databar__container">

        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(DataBar);
