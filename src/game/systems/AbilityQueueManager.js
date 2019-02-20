import { ECSGlobals } from 'game/EntityComponentSystem';

export const AbilityQueueManager = () => {
  const { EntitiesPool, AbilityQueue } = ECSGlobals;

  const abilitiesToSet = EntitiesPool
    .filter(entity => entity.components.hasOwnProperty("ability"))
    .filter(entity => entity.components.ability.currentLifeCyclePhase === 'queue');

    abilitiesToSet.forEach(ability => AbilityQueue.set(ability.id, ability));


    // console.clear();
    // console.table(AbilityQueue);
    // console.table(EntitiesPool);
    // console.log(AbilityQueue.size, EntitiesPool.length);
    // console.clear();
    // console.table(AbilityQueue);
    // console.log(AbilityQueue.size, Object.keys(abilities).length, EntitiesPool.length);

}
