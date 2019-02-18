import React from 'react';

export const EnergyBar = (props) => {
  return (
    <div className="playerpane__energybar-wrapper">
      <div className="playerpane__energybar-current" style={{width: `${props.percentage}%`}}>

      </div>

      <div className="playerpane__energybar-textnode">
        {Math.round(props.percentage)}%
      </div>
    </div>
  )
}
