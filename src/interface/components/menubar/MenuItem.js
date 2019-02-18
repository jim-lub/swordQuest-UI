import React from 'react';

export const MenuItem = (props) => {
  return (
    <div className="UI-menubar-item-container">
      <div className="UI-menubar-item-hover">{props.icon}</div>
      <div className="UI-menubar-item-hover-arrow"></div>
      <img src={require(`assets/ui/icons/${props.icon}.png`)} alt="" />
    </div>
  )
}
