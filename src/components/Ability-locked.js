import React from "react";

import * as PLAYER from "config/PLAYER";

import icon_lock from "assets/ui/icons/lock.png";

export const AbilityLocked = (props) => {
  const controls = PLAYER.CONTROLS_SCHEME();

  return (
    <button
      className="ability">
      <div className="ability-controls-container">{controls.get(props.index)}</div>
      <img src={icon_lock} alt="lock" />
    </button>
  );
}
