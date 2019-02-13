import React from "react";
import { useState, useEffect } from "react";

const DataRow = (props) => {
  return (
    <div className="UI-tooltip-type-container">
      <span className={`UI-tooltip-type-span COLORS-backgroundcolor-combatType-${props.combatType}`}>{props.combatType}</span>
      <span className={`UI-tooltip-type-span COLORS-backgroundcolor-class-${props.class}`}>{props.class}</span>
      <span className={`UI-tooltip-type-span COLORS-backgroundcolor-actionType-${props.actionType}`}>{props.actionType}</span>
    </div>
  )
}

export const Tooltip = (props) => {
  return (
      <div className="UI-tooltip-container">
        <div className="UI-tooltip-title-container">{props.title}</div>
        <DataRow {...props.data} />
        <div className="UI-tooltip-desc-container">{props.description}</div>
      </div>
  )
};
