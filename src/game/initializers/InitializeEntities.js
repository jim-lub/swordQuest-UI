import {
  // Entity,
  // Components,
  // Systems,
  Assemblages,
  // Clusters,
  ECSGlobals
} from 'game/EntityComponentSystem';

export const InitializeEntities = () => {
  const { EntitiesPool } = ECSGlobals;

  EntitiesPool.push(Assemblages.player({x: 400, y: 400}));

  EntitiesPool.push(Assemblages.enemy({x: -445, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 0, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 650, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 1050, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 1150, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 1250, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 1350, y: 300}));
}
