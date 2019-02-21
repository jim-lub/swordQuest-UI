// import { Store } from '../index';

import {
  Entity,
  Components,
  Systems,
  ECSGlobals
} from './EntityComponentSystem';

import { player } from './assemblage/player';
import { block } from './assemblage/level';
import { fireball } from './assemblage/abilities';

import './Entity';
import './components/bundler';

const init = () => {
  const { EntitiesPool } = ECSGlobals;

  EntitiesPool.push(player());
  EntitiesPool.push(block({x: 0, y: 150, width: 20, height: 370})); // left wall
  EntitiesPool.push(block({x: 920, y: 150, width: 20, height: 370})); // right wall
  EntitiesPool.push(block({x: 0, y: 500, width: 940, height: 50})); // floor
}

const update = (dt) => {
  const fixedTimeStep = dt * 0.01;
  // console.clear();
  // console.log(Components);
  // log('queue');
  // log('all');

  Systems.DeleteFromEntitiesPool();

  Systems.UserInput(fixedTimeStep); // Get Input -> acceleration -> velocity ..
  Systems.CollisionDetection(fixedTimeStep) // .. -> check for collisions ..
  Systems.Motion(fixedTimeStep); // .. -> update position

  Systems.AbilityQueueManager();
  Systems.AbilityManager();
  //
  // Systems.Movement.calculate(dt);
  // Systems.CollisionDetection(EntitiesPool, dt);
  // Systems.Movement.apply(EntitiesPool, dt);
}

const render = (ctx) => {
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
