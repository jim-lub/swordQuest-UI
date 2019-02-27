import {
  ECSGlobals,
  Clusters
} from 'game/EntityComponentSystem';

export const UpdateClusters = () => {
  const { EntitiesPool } = ECSGlobals;

  // user
  Clusters['user'] = EntitiesPool.filter(entity => {
    return entity.components.hasOwnProperty('userInput');
  });

  // enemies
  Clusters['enemies'] = EntitiesPool.filter(entity => {
    return entity.components.hasOwnProperty('behaviourTree');
  });

  // abilities
  Clusters['abilities'] = EntitiesPool.filter(entity => {
    return entity.components.defaults.type === 'ability';
  });

}
