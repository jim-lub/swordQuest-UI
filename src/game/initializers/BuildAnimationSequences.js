import { Animations } from 'game/Animations';
import { Assets } from 'game/Assets';

export const BuildAnimationSequences = () => {
  return new Promise((resolve, reject) => {
    const objects = [build('hero')];

    Promise.all(objects)
      .then(() => resolve())
      .catch(e => reject(e));
  });
}

const build = (type) => {
  return new Promise((resolve, reject) => {
    Animations[type] = {};

    import(`config/animationSequences/${type}.json`)
      .then((config) => {
        const { actions } = config.default;

        Object.entries(actions)
          .forEach(action => {
            const [name, data] = action;
            data.direction
              .forEach(dir => {
                Animations[type][`${name}_${dir}`] = buildAnimationSequence(type, name, data, dir);
              });
          });

        resolve();
      })
      .catch(e => reject(e));
  });
}

const buildAnimationSequence = (type, name, data, dir) => {
  const { sprite, ticksPerSequence, ticksPerFrame, sX, sY,
    frames, sWidth, sHeight, offsetX, offsetY } = data;
  const sequence = [];

  for (let i = 0; i < frames; i++) {
    let startTickOfCurrentFrame, endTickOfCurrentFrame;

    startTickOfCurrentFrame = i * ticksPerFrame;
    endTickOfCurrentFrame = (i + 1) * ticksPerFrame - 1;

    sequence.push({
      name: sprite[dir],
      index: i,
      frames: frames,
      sprite: Assets.SPRITESHEETS[type][`${name}_${dir}`],
      ticksPerSequence,
      ticksPerFrame,
      sX: sX[dir][i],
      sY: sY[i],
      sWidth,
      sHeight,
      offsetX: offsetX[dir],
      offsetY: offsetY[dir],
      startTickOfCurrentFrame,
      endTickOfCurrentFrame
    })
  }

  return sequence;
}
