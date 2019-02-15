import React from 'react';
import { useState, useEffect } from 'react';

import * as Utils from 'lib/ui/actionbar-helpers';
import { Dom } from 'lib';

import { Abilities } from 'config/abilities';

import { ICONS } from 'config/icons/ICONS';

import * as PLAYER from 'config/PLAYER';

import { setTooltip } from '../../';

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
                  index={index}
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
                index={index}
              />
            )
          })
      }
    </div>
  )
}

const Ability = (props) => {
  const [cooldown, setCooldown]= useState(0);

  const abilityButtonID = `UI-ACTIONBAR-ABILITY-ID-${props.index}`;
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
    Dom
    .listen()
    .keydown()
    .then(handleKeyPress);
    return () =>
    Dom
    .remove()
    .keydown()
    .ref(handleKeyPress);
  },
  [cooldown, props.globalCooldown]);

  useEffect(() => {
    Dom
    .listen()
    .mouseover(abilityButtonID)
    .then(handleMouseOver);
    return () =>
    Dom
    .remove()
    .mouseover(abilityButtonID)
    .ref(handleMouseOver);
  },
  [props.meta.ability]);

  // Handlers
  const handleClick = () => {
    props.onClick();
    setCooldown(ability.cooldown);
    Dom
    .animation()
    .on(cooldownAnimationID)
    .duration(ability.cooldown)
    .className('UI-actionbar-ability-cooldown-overlay')
  }

  const handleKeyPress = (event) => {
    if (Utils.isOnCooldown(cooldown, props.globalCooldown)) return;

    if (controls.get(props.index) === Utils.keyCodeToKey(event.keyCode)) {
      handleClick();
    }
  }

  const handleMouseOver = () => {
    setTooltip(
      ability.display_name,
      ability.description,
      {
        combatType: props.meta.combatType,
        class: props.meta.class,
        actionType: ability.actionType
      }
    );
  }

  return (
    <button
      id={abilityButtonID}
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

const Empty = (props) => {
  const controls = PLAYER.CONTROLS_SCHEME();
  return (
    <div className="UI-actionbar-ability-container">
      <div className="UI-actionbar-ability-control-text">{controls.get(props.index)}</div>
      <img src={ICONS.emptyAbilitySlot_2} alt="locked" />
    </div>
  )
};

const Locked = (props) => {
  const controls = PLAYER.CONTROLS_SCHEME();
  return (
    <div className="UI-actionbar-ability-container">
      <div className="UI-actionbar-ability-control-text">{controls.get(props.index)}</div>
      <img src={ICONS.lockedAbilitySlot_1} alt="locked" />
    </div>
  )
};
