import {
  ECSGlobals,
  Clusters
} from 'game/EntityComponentSystem';

export const UpdateClusters = () => {
  const { EntitiesPool } = ECSGlobals;

  // user
  Clusters[0] = EntitiesPool.filter(entity => {
    return entity.components.hasOwnProperty('userInput');
  });

  // enemies
  Clusters[1] = EntitiesPool.filter(entity => {
    return entity.components.hasOwnProperty('behaviourTree');
  });

  // abilities
  Clusters[2] = EntitiesPool.filter(entity => {
    return entity.components.defaults.type === 'ability';
  });

}
