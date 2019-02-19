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
  EntitiesPool.push(block(250, 250, 50, 50, 'red'));
  EntitiesPool.push(block(250, 350, 50, 50, 'red'));
  EntitiesPool.push(block(250, 450, 50, 50, 'red'));
  EntitiesPool.push(block(350, 250, 50, 50, 'red'));
  EntitiesPool.push(block(450, 250, 50, 50, 'red'));
  EntitiesPool.push(block(450, 350, 50, 50, 'red'));
  EntitiesPool.push(block(450, 450, 50, 50, 'red'));
  EntitiesPool.push(isPlayerControlledBlock(350, 450, 40, 40, 'purple'));
}

const update = (dt) => {
  // console.clear();
  // log('single', 7, 'positionVectors');
  // log('all');

  Systems.Movement.calculateMovement(Ctrls, EntitiesPool, dt);
  Systems.CollisionDetection(EntitiesPool, dt);
  Systems.Movement.applyMovement(EntitiesPool, dt);
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
