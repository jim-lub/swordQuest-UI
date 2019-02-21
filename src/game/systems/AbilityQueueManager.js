import { ECSGlobals } from 'game/EntityComponentSystem';

import { ability } from 'game/assemblage/abilities';

export const AbilityQueueManager = () => {
  const { EntitiesPool, AbilityQueue } = ECSGlobals;

  if (AbilityQueue.size === 0) return;

  const activeAbilities = EntitiesPool
    .filter(entity => entity.components.defaults.type === 'ability')

  if (activeAbilities.length === 0) {
    const id = AbilityQueue.keys().next().value;
    const ref_name = AbilityQueue.values().next().value;

    EntitiesPool.push(ability(ref_name));
    AbilityQueue.delete(id);
  }
}
