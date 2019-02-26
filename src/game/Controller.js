// import { Store } from '../index';

import {
  // Entity,
  // Components,
  Systems,
  Assemblages,
  Clusters,
  ECSGlobals
} from './EntityComponentSystem';

import { BUILD_LEVEL } from './LEVEL';

import { BackgroundRender } from 'game/lib/BackgroundRender';

const init = () => {
  const { EntitiesPool } = ECSGlobals;

  BUILD_LEVEL();

  EntitiesPool.push(Assemblages.player({x: 400, y: 300}));

  EntitiesPool.push(Assemblages.enemy({x: 0, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 650, y: 300}));
}

const update = () => {
  // console.clear();
  // log('clusters');
  // log('all');

  Systems.DeleteFromEntitiesPool();
  Systems.UpdateClusters();


  Systems.UserInput(0);
  Systems.CollisionDetection(0);
  Systems.Motion(0);
  Systems.Camera();

  Systems.EnemyInput(1);
  Systems.CollisionDetection(1);
  Systems.Motion(1);

  Systems.AbilityQueueManager();
  Systems.AbilityManager();
  Systems.AttackPointsController();
  Systems.Physics(2);
  Systems.Motion(2);

}

const render = (ctx) => {
  BackgroundRender(ctx);
  Systems.RenderAppearance(ctx);
  Systems.RenderAttackPoints(ctx);
}

export const Controller = {
  init,
  update,
  render
}

function log(type, index, component) {
  const { EntitiesPool, AbilityQueue } = ECSGlobals;

  if (type === 'all') {
    console.table(EntitiesPool);
  }

  if (type === 'clusters') {
    console.table(Clusters);
  }

  if (type === 'queue') {
    console.table(AbilityQueue);
  }

  if (type === 'single') {
    console.table(EntitiesPool[index].components[component])
  }
}
