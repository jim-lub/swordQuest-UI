import { Store } from '../index';

import { Update } from './Update';
import { Render } from './Render';
import { Controls } from './Controls';

const Ctrls = new Controls();

const update = (dt) => {
  Update(Ctrls, state, dt);
}

const render = (ctx) => {
  Render(ctx, state);
}

export const Controller = {
  update,
  render
}

const state = {
  entities: [
    {
      pos: {
        x: 150,
        y: 450
      },
      vel: {
        x: 0,
        y: 0
      },
      acc: {
        x: 0,
        y: 0
      },
      size: {
        width: 20,
        height: 60
      },
      isPlayerControlled: true
    }
  ],
  blocks: [
  {
    x: 250,
    y: 250,
    velX: 0,
    velY: 0,
    accX: 0,
    accY: 0,
    inputX: 10,
    inputY: 0,
    width: 50,
    height: 20,
    color: 'red'
  },
  {
    x: 250,
    y: 250,
    velX: 0,
    velY: 0,
    accX: 0,
    accY: 0,
    inputX: 10,
    inputY: -10,
    width: 30,
    height: 50,
    color: 'blue'
  },
  {
    x: 250,
    y: 250,
    velX: 0,
    velY: 0,
    accX: 0,
    accY: 0,
    inputX: 10,
    inputY: 10,
    width: 50,
    height: 50,
    color: 'green'
  }]
}
