import { Vector } from 'game/lib/Vector';

export const isStatic = ({x = 0, y = 0}) => ({
  defaults: Object.assign({}, {
    type: 'static',
    position: new Vector(x, y)
  })
});
