import { ECSGlobals } from 'game/EntityComponentSystem';

export const DeleteFromEntitiesPool = () => {
  let { EntitiesPool } = ECSGlobals;

  ECSGlobals.EntitiesPool = EntitiesPool
    .filter(entity => !entity.delete);
}
