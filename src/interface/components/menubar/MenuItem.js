import React from 'react';

export const MenuItem = (props) => {
  const viewportRequest = ['abilitiesPanel', 'inventoryPanel', 'mapPanel', 'questsPanel', 'settingsPanel', 'achievementsPanel'];
  return (
    <div className="UI-menubar-item-container">
      <div className="UI-menubar-item-hover">{props.icon}</div>
      <div className="UI-menubar-item-hover-arrow"></div>
      <button className="UI-menubar-button" onClick={() => props.requestViewportChange(viewportRequest[props.index])}>
        <img src={require(`assets/ui/icons/${props.icon}.png`)} alt="" />
      </button>
    </div>
  )
}
