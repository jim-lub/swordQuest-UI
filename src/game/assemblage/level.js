import { Entity, Components } from 'game/EntityComponentSystem';

export const block = ({x, y, width, height}) => {
  let player = new Entity.create();

  player.addComponent(
    Components.isStatic({
      x,
      y
    })
  );

  player.addComponent(
    Components.isColliderObstacle({
      width,
      height
    })
  );

  player.addComponent(
    Components.appearance({
      width,
      height,
      color: 'black'
    })
  );

  return player;
}
