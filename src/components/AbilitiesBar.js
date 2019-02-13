import React from "react";
import { useState, useEffect } from "react";

import * as PLAYER from "config/PLAYER";

import { Ability } from "./Ability";
import { AbilityLocked } from "./Ability-locked";

import { Abilities } from "config/abilities";

export const AbilitiesBar = () => {
  const [globalCooldown, setGlobalCooldown] = useState(0);

  const handleClick = () => {
    setGlobalCooldown(1);
    animations().cooldown('abilitiesBAR', 1);
  }

  const timer = () => {
    setGlobalCooldown(globalCooldown - 1);
  }

  useEffect(() => {
    if (globalCooldown <= 0) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [globalCooldown]);

  return (
    <div id="abilitiesBAR" className="UI-abilitiesbar">
      <div id="ui-ability-container">
      {
        PLAYER.getAbilityBarArray().map((cur, index) => {
          if (cur.combatType === 'none') {
            return (
              <AbilityLocked
                key={index}
                index={index}
              />
            )
          } else {
            let ability = Abilities[cur.combatType][cur.class][cur.ability];

            return (
              <Ability
                key={index}
                index={index}
                name={ability.display_name}
                icon={ability.icon}
                cooldown={ability.cooldown}
                type={cur.type}
                desc={ability.description}
                meta={cur}
                ability={ability}
                onClick={handleClick}
                globalCooldown={globalCooldown}
              />)
            }
        })
      }
      </div>
    </div>
  );
}

const animations = () => ({
  cooldown(id, cooldown) {
    document.getElementById(id).className = "UI-abilitiesbar";
    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.getElementById(id).className = "UI-abilitiesbar UI-abilitiesbar-cooldown";
        document.getElementById(id).style.animationDuration = `${cooldown}s`;
      });
    });
  }
});
