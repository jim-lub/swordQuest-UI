import { ECSGlobals } from 'game/EntityComponentSystem';

export const AbilityQueueManager = () => {
  const { EntitiesPool, AbilityQueue } = ECSGlobals;

  const abilities = EntitiesPool
    .filter(entity => entity.components.hasOwnProperty("ability"))
    .filter(entity => entity.components.ability.active === true);

  abilities.forEach(ability => AbilityQueue.set(ability.id, ability));

  if (AbilityQueue.size > 0) {
    const abilityID = [...AbilityQueue.keys()][0];
    const root = AbilityQueue.get(abilityID);
    const ability = AbilityQueue.get(abilityID).components;

    if (ability.ability.ticksRemaining <= 0) {
      ability.ability.active = false;
      root.removeAfterNextUpdate = true;
      AbilityQueue.delete(abilityID);
    }
    ability.ability.ticksRemaining--;

    // console.clear();
    // console.log(abilityID);
    // console.log(ability);
    // console.log(root);
    // console.log(AbilityQueue);
    // console.log(AbilityQueue.size, Object.keys(abilities).length, EntitiesPool.length);
  }
}
