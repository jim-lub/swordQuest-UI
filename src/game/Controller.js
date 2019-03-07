import {
  // Entity,
  // Components,
  Systems,
  Assemblages,
  // Clusters,
  ECSGlobals
} from './EntityComponentSystem';

import { BUILD_LEVEL } from './LEVEL';

import {
  InitializeAssets
} from './AssetsManager';

import { BackgroundRender } from 'game/lib/BackgroundRender';

const init = () => {
  const { EntitiesPool } = ECSGlobals;
  InitializeAssets();

  BUILD_LEVEL();

  EntitiesPool.push(Assemblages.player({x: 400, y: 300}));

  EntitiesPool.push(Assemblages.enemy({x: -445, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 0, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 650, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 1050, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 1150, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 1250, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 1350, y: 300}));
}

const update = () => {
  Systems.DeleteFromEntitiesPool();
  Systems.UpdateClusters();


  Systems.UserInput('user');
  Systems.Physics('user');
  Systems.CollisionDetection('user');
  Systems.Motion('user');

  Systems.EnemyInput('enemies');
  Systems.Physics('enemies');
  Systems.CollisionDetection('enemies');
  Systems.Motion('enemies');

  Systems.AbilityQueueManager();
  Systems.AbilityManager();
  Systems.AttackPointsController();
  Systems.AttackPointCollisionDetection();
  Systems.Physics('abilities');
  Systems.Motion('abilities');

  Systems.Camera();
}

const render = (ctx) => {
  BackgroundRender(ctx);
  Systems.RenderAppearance(ctx);
  Systems.RenderAttackPoints(ctx);
  Systems.RenderHealth(ctx);
}

export const Controller = {
  init,
  update,
  render
}
