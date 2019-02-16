import React from 'react';

export const ManaBar = (props) => {
  return (
    <div className="playerpane__manabar-wrapper">
      <div className="playerpane__manabar-current" style={{width: `${props.percentage}%`}}>

      </div>

      <div className="playerpane__manabar-textnode">
        {Math.round(props.percentage)}%
      </div>
    </div>
  )
}
