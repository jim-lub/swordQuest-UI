import { Vector } from 'game/lib/Vector';

export const isDynamic = ({x = 0, y = 0, direction = 0}) => ({
  defaults: Object.assign({}, {
    type: 'dynamic',
    position: new Vector(x, y),
    velocity: new Vector(0, 0),
    acceleration: new Vector(0, 0),
    direction: direction,
  })
});
