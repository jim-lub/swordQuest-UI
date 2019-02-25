import React from 'react';

import { connect } from 'react-redux';

import { AbilityInformation, OneLineInformation } from './types';

const TooltipReceiver = (props) => {
  if (!props.tooltipInformation.informationType || !props.tooltipInformation.data) return (<div className={`tooltip__wrapper tooltip__hide`}></div>);

  const { data } = props.tooltipInformation;

  return (
      <div className={`tooltip__wrapper`}>
        <div className="tooltip__container">
           {(props.tooltipInformation.informationType === 'ability-information') ? <AbilityInformation data={data} /> : ""}
           {(props.tooltipInformation.informationType === 'oneline-information') ? <OneLineInformation data={data} /> : ""}
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    tooltipInformation: state.tooltip,
  }
}

export default connect(mapStateToProps)(TooltipReceiver);
