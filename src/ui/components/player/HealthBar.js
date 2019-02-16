import React from 'react';

export const HealthBar = (props) => {
  return (
    <div className="playerpane__healthbar-wrapper">
      <div className="playerpane__healthbar-current" style={{width: `${props.percentage}%`}}>
      
      </div>

      <div className="playerpane__healthbar-textnode">
        {Math.round(props.percentage)}%
      </div>
    </div>
  )
}
