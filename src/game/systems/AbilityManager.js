import { ECSGlobals, Components } from 'game/EntityComponentSystem';

import { Abilities } from 'config/abilities';

import { getPlayerData } from 'game/utils/player';

export const AbilityManager = () => {
  const { EntitiesPool, AbilityQueue } = ECSGlobals;
  const { position, direction } = getPlayerData().components.positionVectors;

  const firstAbilityInQueue = AbilityQueue.values().next().value || null;

  const ability = EntitiesPool.filter(entity => entity.components.hasOwnProperty('ability') && entity.id === firstAbilityInQueue.id)[0]
  if (!ability) return;

  const [combatType, className, abilityName] = ability.components.ability.ref_name.split("_");
  let lifeCyclePhase = ability.components.ability.currentLifeCyclePhase;
  let ticks = ability.components.ability.ticks++;
  let config = Abilities[combatType][className][abilityName];

  if (lifeCyclePhase === 'queue') {
    if (!ability.components.hasOwnProperty('positionVectors')) ability.addComponent(new Components.Position(0, 0));
    if (!ability.components.hasOwnProperty('appearance')) ability.addComponent(new Components.Appearance(config.size[0], config.size[1], config.color));

    ability.components.ability.currentLifeCyclePhase = 'anticipation';
  }

  if (lifeCyclePhase === 'anticipation') {
    ability.components.positionVectors.position.set(position.x + (config.size[0] / 24), position.y - 30)

    if (ticks > config.ticks.anticipation) {
      ability.components.ability.direction = direction;
      ability.components.ability.ticks = 0;
      ability.components.ability.currentLifeCyclePhase = 'action';
    }
  }

  if (lifeCyclePhase === 'action') {
    ability.components.positionVectors.velocity.set(config.speed.value[0] * ability.components.ability.direction, config.speed.value[1])
    if (ticks > config.ticks.action) {
      ability.components.ability.ticks = 0;
      ability.components.ability.currentLifeCyclePhase = 'delete';
    }
  }

  if (lifeCyclePhase === 'delete'){
    ability.removeAfterNextUpdate = true;
    AbilityQueue.delete(ability.id);
  }


  // console.clear();
  // console.log(config);
  // console.log(ticks, lifeCyclePhase);
  // logTables();

}

const logTables = () => {
  const { EntitiesPool, AbilityQueue } = ECSGlobals;
  console.table(AbilityQueue);
  console.table(EntitiesPool);
}
