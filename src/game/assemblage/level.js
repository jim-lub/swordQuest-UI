import { Entity, Components } from 'game/EntityComponentSystem';

export const block = ({x, y, width, height}) => {
  let player = new Entity.Instance();

  player.addComponent(
    new Components.isStatic({
      x,
      y
    })
  );

  player.addComponent(
    new Components.isColliderObstacle({
      width,
      height
    })
  );

  player.addComponent(
    new Components.Appearance({
      width,
      height,
      color: 'black'
    })
  );

  return player;
}
