import { ECSGlobals, Components } from 'game/EntityComponentSystem';

import { Abilities } from 'config/abilities';

import { getPlayerData } from 'game/utils/player';

export const AbilityManager = () => {
  const { EntitiesPool } = ECSGlobals;

  const userData = getPlayerData().components;
  const user = {
    position: userData.defaults.position,
    center: userData.appearance.center,
    direction: userData.defaults.direction,
    size: userData.appearance.size
  }

  EntitiesPool
    .filter(entity => entity.components.defaults.type === 'ability')
    .forEach(ability => {
      const { ref_name, currentLifeCyclePhase } = ability.components.defaults;
      const refTo = Abilities.refNameToComponents(ref_name);
      const abilityData = Abilities[refTo.combatType][refTo.className][refTo.abilityName];


      if (currentLifeCyclePhase === 'start') {
        handleStartLifeCycle(ability, user);

        if (handleTicks(ability, abilityData.ticksPerPhase.start))
          setCurrentLifeCyclePhaseTo(ability, 'anticipation');
      }

      if (currentLifeCyclePhase === 'anticipation') {
        handleAnticipationtLifeCycle(ability, abilityData, user);

        if (handleTicks(ability, abilityData.ticksPerPhase.anticipation)) {
          ability.removeComponent('appearance');
          setCurrentLifeCyclePhaseTo(ability, 'action');
        }
      }

      if (currentLifeCyclePhase === 'action') {
        handleActionLifeCycle(ability, abilityData, user);

        if (ability.components.collider.collisionOnAxis.x || ability.components.collider.collisionOnAxis.y) {
          ability.removeComponent('appearance');
          ability.components.defaults.ticks = 0;
          setCurrentLifeCyclePhaseTo(ability, 'impact');
        }
        if (handleTicks(ability, abilityData.ticksPerPhase.action)) {
          ability.removeComponent('appearance');
          setCurrentLifeCyclePhaseTo(ability, 'impact');
        }
      }

      if (currentLifeCyclePhase === 'impact') {
        handleImpactLifeCycle(ability, abilityData, user);

        if (handleTicks(ability, abilityData.ticksPerPhase.impact))
          setCurrentLifeCyclePhaseTo(ability, 'delete');
      }

      if (currentLifeCyclePhase === 'delete') {
        handleDeleteLifeCycle(ability);
      }
    });

}

const handleStartLifeCycle = ({ components }) => {

}

const handleAnticipationtLifeCycle = ({ addComponent, components }, abilityData, user) => {
  if (!components.hasOwnProperty('appearance')) {
    addComponent(
      Components.appearance({
        width: abilityData.devVisuals.size.anticipation[0],
        height: abilityData.devVisuals.size.anticipation[1],
        color: abilityData.devVisuals.colors.anticipation
      })
    );
  }

  components.defaults.position.set(
    user.position.x + user.center.x - (abilityData.devVisuals.size.anticipation[0] / 2) + (abilityData.devVisuals.offset.anticipation[0] * user.direction),
    user.position.y + abilityData.devVisuals.offset.anticipation[1]
  );
}

const handleActionLifeCycle = ({ addComponent, components }, abilityData, user) => {
  if (!components.hasOwnProperty('appearance')) {
    addComponent(
      Components.appearance({
        width: abilityData.devVisuals.size.action[0],
        height: abilityData.devVisuals.size.action[1],
        color: abilityData.devVisuals.colors.action
      })
    );
  }

  if (components.defaults.direction === 0) {
    components.defaults.direction = user.direction;
  }

  components.defaults.velocity.set(
    abilityData.speed.value[0] * components.defaults.direction,
    abilityData.speed.value[1]
  )
}

const handleImpactLifeCycle = ({ addComponent, components }, abilityData, user) => {
  if (!components.hasOwnProperty('appearance')) {
    addComponent(
      Components.appearance({
        width: abilityData.devVisuals.size.impact[0],
        height: abilityData.devVisuals.size.impact[1],
        color: abilityData.devVisuals.colors.impact
      })
    );
  }

  components.defaults.velocity.set(1 * components.defaults.direction, 0);
}

const handleDeleteLifeCycle = (ability) => {
  ability.delete = true;
}


const handleTicks = ({ components }, limit) => {
  if (components.defaults.ticks >= limit) {
    components.defaults.ticks = 0;
    return true;
  };

  components.defaults.ticks++;
  return false;
}

const setCurrentLifeCyclePhaseTo = ({ components }, phase) => {
  components.defaults.currentLifeCyclePhase = phase;
}
