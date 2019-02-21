import { Entity, Components } from 'game/EntityComponentSystem';

export const player = () => {
  let player = new Entity.create();

  player.addComponent(
    Components.userInput({
      activeKeys: ['w', 'a', 's', 'd', 'space']
    })
  );

  player.addComponent(
    Components.isDynamic({
      x: 200,
      y: 300,
      direction: 1
    })
  );

  player.addComponent(
    Components.isCollider({
      width: 50,
      height: 50
    })
  );

  player.addComponent(
    Components.isColliderObstacle({
      width: 50,
      height: 50
    })
  );

  player.addComponent(
    Components.appearance({
      width: 50,
      height: 50,
      color: 'teal'
    })
  );

  return player;
}
