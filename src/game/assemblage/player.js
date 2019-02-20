import { Entity, Components } from 'game/EntityComponentSystem';

export const player = () => {
  let player = new Entity.Instance();

  player.addComponent(
    new Components.userInput({
      activeKeys: ['w', 'a', 's', 'd', 'space']
    })
  );

  player.addComponent(
    new Components.isDynamic({
      x: 200,
      y: 300,
      direction: 1
    })
  );

  player.addComponent(
    new Components.isCollider({
      width: 50,
      height: 50
    })
  );

  player.addComponent(
    new Components.isColliderObstacle({
      width: 50,
      height: 50
    })
  );

  player.addComponent(
    new Components.Appearance({
      width: 50,
      height: 50,
      color: 'teal'
    })
  );

  return player;
}
