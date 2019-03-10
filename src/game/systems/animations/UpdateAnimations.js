import {
  Clusters
} from 'game/EntityComponentSystem';

import { Animations } from 'game/Animations';

export const UpdateAnimations = () => {
  const entities = [...Clusters['user'], ...Clusters['enemies']]
    .filter(entity => entity.components.hasOwnProperty('animation'));

  entities.forEach(entity => {
    const tickCount = entity.components.animation.tickCount++;
    const { index } = entity.components.animation;
    const { velocity, direction } = entity.components.defaults;

    const dir = (direction === -1) ? 'left' : 'right';

    let action = 'idle', type = 'hero';

    if (Math.abs(velocity.y) > 0) {
      if (Math.sign(velocity.y) > 0) action = 'fall';
      if (Math.sign(velocity.y) < 0) action = 'jump';
    } else if (Math.abs(velocity.x) > 0) {
      action = 'run';
    } else {
      action = 'idle';
    }

    const sequence = Animations[type][`${action}_${dir}`];

    sequence.forEach(frame => {
      if (tickCount >= frame.startTickOfCurrentFrame &&
          tickCount <= frame.endTickOfCurrentFrame &&
          index !== frame.index) {

          entity.components.animation.sprite = frame.sprite;
          entity.components.animation.data = {
            sX: frame.sX,
            sY: frame.sY,
            sWidth: frame.sWidth,
            sHeight: frame.sHeight,
            offsetX: frame.offsetX,
            offsetY: frame.offsetY
          };
          entity.components.animation.index = frame.index;
      }

      if (tickCount > frame.ticksPerSequence) {
        entity.components.animation.tickCount = 0;
        entity.components.index = null;
      }
    });

    // console.log(entity.components.animation.tickCount, sequence);
  });
}
