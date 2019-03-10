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

    const action = 'run', type = 'hero', dir = 'left';
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
