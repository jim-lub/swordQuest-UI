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

  // EntitiesPool.push(Assemblages.enemy({x: 50, y: 300}));
  EntitiesPool.push(Assemblages.enemy({x: 650, y: 300}));

  // EntitiesPool.push(Assemblages.block({x: -500, y: 150, width: 20, height: 370, opacity: 0.6})); // left wall
  // EntitiesPool.push(Assemblages.block({x: 1920, y: 150, width: 20, height: 370, opacity: 0.6})); // right wall
  // EntitiesPool.push(Assemblages.block({x: -500, y: 510, width: 2540, height: 50, opacity: 0.1})); // floor
  //
  // EntitiesPool.push(Assemblages.block({x: 5, y: 450, width: 30, height: 30, opacity: 0.5})); // floor
  // EntitiesPool.push(Assemblages.block({x: 105, y: 450, width: 30, height: 30, opacity: 0.5})); // floor
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
  Systems.CollisionDetection(2);
  Systems.Motion(2);

}

const render = (ctx) => {
  BackgroundRender(ctx);
  Systems.RenderAppearance(ctx);
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
