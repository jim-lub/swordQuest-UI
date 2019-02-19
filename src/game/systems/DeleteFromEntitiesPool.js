import { ECSGlobals } from 'game/EntityComponentSystem';

export const DeleteFromEntitiesPool = () => {
  let { EntitiesPool } = ECSGlobals;

  const arrayWithEntitiesRemoved = EntitiesPool
    .filter(entity => !entity.removeAfterNextUpdate);

  if (EntitiesPool.length !== arrayWithEntitiesRemoved.length) {
    ECSGlobals.EntitiesPool = arrayWithEntitiesRemoved;
  }

}
