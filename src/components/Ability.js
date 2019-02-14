import React from "react";
// import ReactDOM from "react";
import { useState, useEffect } from "react";

import * as PLAYER from "config/PLAYER";

import { setTooltip } from '../';

export const Ability = (props) => {
  const [cooldown, setCooldown] = useState(0);
  let id = `ability-btn-${props.index}`;

  const controls = PLAYER.CONTROLS_SCHEME();

  const handleClick = () => {
    props.onClick();
    setCooldown(props.cooldown);
    animations().cooldown(props.index, props.cooldown);
  }

  const timer = () => {
    setCooldown(cooldown - 1);
  }

  const handleKeyPress = (event) => {
    if (isOnCooldown()) return;

    const key = keyCodeToKey(event.keyCode);

    if (controls.get(props.index) === key) {
      handleClick();
    }
  }

  const handleMouseOver = (event) => {
    setTooltip({
      title: props.name,
      description: props.desc,
      data: {
        combatType: props.meta.combatType,
        class: props.meta.class,
        actionType: props.ability.actionType
      }
    });
  }

  useEffect(() => {
    if (cooldown <= 0) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  const isOnCooldown = () => {

    if (cooldown > 0) {
      return true;
    }

    if (props.globalCooldown > 0) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [cooldown, props.globalCooldown]);

  useEffect(() => {
    document.getElementById(id).addEventListener("mouseover", handleMouseOver);
    return () => document.getElementById(id).removeEventListener("mouseover", handleMouseOver);
  }, [cooldown, props.globalCooldown]);

  return (
    <button
      className="ability"
      disabled={isOnCooldown()}
      onClick={handleClick}
      id={id}
    >
      <div id={props.index} className=""></div>
      <div className="ability-controls-container">{controls.get(props.index)}</div>
      <img src={props.icon} alt={props.name} />
    </button>
  );
}

const keyCodeToKey = (keyCode) => {
  let keys = new Map([
    [87, 'w'],
    [65, 'a'],
    [83, 's'],
    [68, 'd'],
    [32, 'space'],
    [16, 'shift'],
    [49, '1'],
    [50, '2'],
    [51, '3'],
    [52, '4'],
    [53, '5'],
    [54, '6'],
    [55, '7'],
    [56, '8'],
    [57, '9']
  ]);

  if (keys.has(keyCode)) {
    return keys.get(keyCode);
  }

  return null;
}

const animations = () => ({
  cooldown(id, cooldown) {
    document.getElementById(id).className = "";
    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.getElementById(id).className = "cooldown";
        document.getElementById(id).style.animationDuration = `${cooldown}s`;
      });
    });
  }
});
