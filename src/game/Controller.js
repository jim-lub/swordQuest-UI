// import { Store } from '../index';

// import { Update } from './Update';
import { Render } from './Render';
import { Ctrls } from './Controls';

import {
  // Entity,
  // Components,
  Systems
} from './EntityComponentSystem';

import { block, isPlayerControlledBlock } from './assemblage/block';

import './Entity';
import './components/bundler';

const EntitiesPool = [];

const init = () => {
  EntitiesPool.push(block(250, 250, 50, 50, 'red', 'dynamic'));
  EntitiesPool.push(block(250, 350, 50, 50, 'red', 'dynamic'));
  EntitiesPool.push(block(250, 450, 50, 50, 'red', 'dynamic'));
  EntitiesPool.push(block(350, 250, 50, 50, 'red', 'dynamic'));

  EntitiesPool.push(block(0, 0, 20, 520, 'grey', 'static')); // left wall
  EntitiesPool.push(block(920, 0, 20, 520, 'grey', 'static')); // right wall
  EntitiesPool.push(block(0, 500, 940, 20, 'grey', 'static')); // floor

  EntitiesPool.push(isPlayerControlledBlock(350, 450, 40, 40, 'purple', 'dynamic'));
}

const update = (dt) => {
  console.clear();
  // log('single', 3, 'positionVectors');
  // log('all');

  Systems.Movement.calculate(Ctrls, EntitiesPool, dt);
  Systems.CollisionDetection(EntitiesPool, dt);
  Systems.Movement.apply(EntitiesPool, dt);
  // Update(Ctrls, dt);
}

const render = (ctx) => {
  Render(ctx, EntitiesPool);
}

export const Controller = {
  init,
  update,
  render
}

function log(type, index, component) {
  if (type === 'all') {
    console.table(EntitiesPool);
  }

  if (type === 'single') {
    console.table(EntitiesPool[index].components[component])
  }
}
