import React from 'react';

import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { DataRowTypes } from './';

const Tooltip = (props) => {
  const { title, description, data } = props.tooltipInformation;
  return (
      <div className="tooltip__wrapper">
        <div className="tooltip__container">
          <div className="tooltip__segment--title">{title}</div>
          <DataRowTypes {...data} />
          <div className="tooltip__segment--description">{description}</div>
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    tooltipInformation: state.tooltip,
  }
}

export default connect(mapStateToProps)(Tooltip);
