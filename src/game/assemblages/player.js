import { Entity, Components } from 'game/EntityComponentSystem';

export const player = ({x = 0, y = 0}) => {
  let player = new Entity.create();

  player.addComponent(
    Components.userInput({
      activeKeys: ['w', 'a', 's', 'd', 'space']
    })
  );

  player.addComponent(
    Components.cameraFollow()
  );

  player.addComponent(
    Components.isDynamic({
      x,
      y,
      direction: 1
    })
  );

  player.addComponent(
    Components.isCollider({
      width: 30,
      height: 30
    })
  );

  player.addComponent(
    Components.isColliderObstacle({
      width: 30,
      height: 30
    })
  );

  player.addComponent(
    Components.appearance({
      width: 30,
      height: 30,
      color: 'teal'
    })
  );

  return player;
}
