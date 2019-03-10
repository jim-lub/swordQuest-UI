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
      height: 40
    })
  );

  player.addComponent(
    Components.isColliderObstacle({
      width: 30,
      height: 40
    })
  );

  player.addComponent(
    Components.appearance({
      type: 'hero',
      width: 30,
      height: 45,
      color: 'teal'
    })
  );

  player.addComponent(
    Components.hasAnimation({
      type: 'hero'
    })
  );

  player.addComponent(
    Components.hasHealth({
      value: 500
    })
  );

  return player;
}
