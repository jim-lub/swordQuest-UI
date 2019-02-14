import React from 'react';
import { useState, useEffect } from 'react';

import * as Utils from 'lib/ui/actionbar-helpers';

import { Abilities } from 'config/abilities';

import { ICONS } from 'config/icons/ICONS';

import * as PLAYER from 'config/PLAYER';

export const Actionbar = (props) => {
  const [globalCooldown, setGlobalCooldown] = useState(0);

  const timer = () => {
    setGlobalCooldown(globalCooldown - 1);
  }

  useEffect(() => {
    if (globalCooldown <= 0) return;

    const timerId = setInterval(timer, 1000);
    return () => clearInterval(timerId);
  }, [globalCooldown]);

  const handleClick = () => {
    setGlobalCooldown(1);
    // enable global cooldown animation here
  }

  return (
    <div className="UI-actionbar-container">
      {
        PLAYER.getActionbarArray()
          .map((cur, index) => {
            if (cur.status === 'empty') {
              return (
                <Empty
                  key={index}
                />
              )
            }

            if (cur.status === 'active') {
              return (
                <Ability
                  key={index}
                  index={index}
                  meta={cur}
                  globalCooldown={globalCooldown}
                  onClick={handleClick}
                />
              )
            }

            return (
              <Locked
                key={index}
              />
            )
          })
      }
    </div>
  )
}

const Ability = (props) => {
  const [cooldown, setCooldown]= useState(0);

  const eventListenerID = `UI-ACTIONBAR-ABILITY-ID-${props.index}`;
  const cooldownAnimationID = `UI-ACTIONBAR-ABILITY-CD-ID-${props.index}`;
  const ability = Abilities[props.meta.combatType][props.meta.class][props.meta.ability];
  const controls = PLAYER.CONTROLS_SCHEME();

  // Managing the cooldown
  const timer = () => {
    setCooldown(cooldown -1);
  }

  useEffect(() => {
    if (!Utils.isOnCooldown(cooldown, props.globalCooldown)) return;

    const timerId = setInterval(timer, 1000);
    return () => clearInterval(timerId);
  },
  [cooldown])

  useEffect(() => {
    Utils
    .newEventListener()
    .keydown(handleKeyPress);
    return () =>
    Utils
    .removeEventListener()
    .keydown(handleKeyPress);
  },
  [cooldown, props.globalCooldown]);

  useEffect(() => {
    Utils
    .newEventListener()
    .mouseover(eventListenerID, handleMouseOver);
    return () =>
    Utils
    .removeEventListener()
    .mouseover(eventListenerID, handleMouseOver);
  },
  [cooldown, props.globalCooldown]);

  // Handlers
  const handleClick = () => {
    props.onClick();
    setCooldown(ability.cooldown);
    Utils.animations().cooldown(cooldownAnimationID, ability.cooldown);
  }

  const handleKeyPress = (event) => {
    if (Utils.isOnCooldown(cooldown, props.globalCooldown)) return;

    if (controls.get(props.index) === Utils.keyCodeToKey(event.keyCode)) {
      handleClick();
    }
  }

  const handleMouseOver = () => {
    // set tooltip
  }

  return (
    <button
      id={eventListenerID}
      className="UI-actionbar-ability-container"
      disabled={Utils.isOnCooldown(cooldown, props.globalCooldown)}
      onClick={handleClick}
    >
      <div className="UI-actionbar-ability-control-text">{controls.get(props.index)}</div>
      <img src={ability.icon} alt={ability.ref_name} />
      <div id={cooldownAnimationID} className=""></div>
    </button>
  )
};

const Empty = () => {
  return (
    <div className="UI-actionbar-ability-container">
      Empty
    </div>
  )
};

const Locked = () => {
  return (
    <div className="UI-actionbar-ability-container">
      <img src={ICONS.lock} alt="locked" />
    </div>
  )
};
