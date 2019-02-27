import {
  ECSGlobals,
  Clusters,
  Assemblages
} from 'game/EntityComponentSystem';

export const AbilityQueueManager = () => {
  const { EntitiesPool, AbilityQueue } = ECSGlobals;

  if (AbilityQueue.size === 0) return;

  const activeAbilities = Clusters['abilities']
    .filter(ability => ability.components.defaults.currentLifeCyclePhase === 'start' && ability.components.defaults.currentLifeCyclePhase === 'impact')

  if (activeAbilities.length === 0) {
    const id = AbilityQueue.keys().next().value;
    const ref_name = AbilityQueue.values().next().value;

    EntitiesPool.push(Assemblages.ability(ref_name));
    AbilityQueue.delete(id);
  }
}
