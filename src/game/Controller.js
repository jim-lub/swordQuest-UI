// import { Store } from '../index';

import { Render } from './Render';
import { Ctrls } from './Controls';

import {
  Systems,
  ECSGlobals
} from './EntityComponentSystem';

import { block, isPlayerControlledBlock } from './assemblage/block';

import './Entity';
import './components/bundler';

const init = () => {
  const { EntitiesPool } = ECSGlobals;

  EntitiesPool.push(block(0, 150, 20, 370, 'grey', 'static')); // left wall
  EntitiesPool.push(block(920, 150, 20, 370, 'grey', 'static')); // right wall
  EntitiesPool.push(block(0, 500, 940, 50, 'grey', 'static')); // floor

  EntitiesPool.push(isPlayerControlledBlock(350, 50, 40, 40, 'purple', 'dynamic')); // player
}

const update = (dt) => {
  const { EntitiesPool } = ECSGlobals;
  // console.clear();
  // log('all');
  // log('queue');

  Systems.DeleteFromEntitiesPool(EntitiesPool);
  Systems.AbilityQueueManager();
  Systems.AbilityManager();

  Systems.Movement.calculate(Ctrls, EntitiesPool, dt);
  Systems.CollisionDetection(EntitiesPool, dt);
  Systems.Movement.apply(EntitiesPool, dt);
}

const render = (ctx) => {
  const { EntitiesPool } = ECSGlobals;

  Render(ctx, EntitiesPool);
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
