import React from 'react';

import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { DataRowTypes } from './';

const Tooltip = (props) => {
  const { title, description, data } = props.tooltipInformation;
  return (
      <div className="UI-tooltip-container">
        <div className="UI-tooltip-title-container">{title}</div>
        <DataRowTypes {...data} />
        <div className="UI-tooltip-desc-container">{description}</div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    tooltipInformation: state.tooltip,
  }
}

export default connect(mapStateToProps)(Tooltip);
