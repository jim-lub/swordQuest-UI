import { Update } from './Update';
import { Render } from './Render';

const update = () => {
  Update(state);
}

const render = (ctx) => {
  Render(ctx, state);
}

export const Controller = {
  update,
  render
}

const state = {
  blocks: [
  {
    x: 250,
    y: 250,
    velX: 1,
    velY: 0,
    width: 50,
    height: 20,
    color: 'red'
  },
  {
    x: 250,
    y: 250,
    velX: 1,
    velY: -1,
    width: 30,
    height: 50,
    color: 'blue'
  },
  {
    x: 250,
    y: 250,
    velX: 2,
    velY: 1,
    width: 50,
    height: 50,
    color: 'green'
  }]
}
