// import { Store } from '../index';

import {
  // Entity,
  // Components,
  Systems,
  ECSGlobals
} from './EntityComponentSystem';

import { BackgroundRender } from 'game/lib/BackgroundRender';

import { player } from './assemblage/player';
import { block } from './assemblage/level';

import './Entity';
import './components/bundler';

const init = () => {
  const { EntitiesPool } = ECSGlobals;

  EntitiesPool.push(player());
  EntitiesPool.push(block({x: 0, y: 150, width: 20, height: 370, opacity: 0.6})); // left wall
  EntitiesPool.push(block({x: 1920, y: 150, width: 20, height: 370, opacity: 0.6})); // right wall
  EntitiesPool.push(block({x: 0, y: 480, width: 2040, height: 50, opacity: 0.1})); // floor
}

const update = (dt) => {
  const fixedTimeStep = dt * 0.01;
  console.clear();
  // log('queue');
  log('all');

  Systems.DeleteFromEntitiesPool();

  Systems.UserInput(fixedTimeStep); // Get Input -> acceleration -> velocity ..
  Systems.CollisionDetection(fixedTimeStep) // .. -> check for collisions ..
  Systems.Motion(fixedTimeStep); // .. -> update position

  Systems.AbilityQueueManager();
  Systems.AbilityManager();
  Systems.Camera(fixedTimeStep);

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

  if (type === 'queue') {
    console.table(AbilityQueue);
  }

  if (type === 'single') {
    console.table(EntitiesPool[index].components[component])
  }
}
