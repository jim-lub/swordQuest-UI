import { Entity, Components } from 'game/EntityComponentSystem';

export const enemy = ({x = 0, y = 0}) => {
  let enemy = new Entity.create();

  enemy.addComponent(
    Components.isDynamic({
      x,
      y,
      direction: 1
    })
  );

  enemy.addComponent(
    Components.isCollider({
      width: 40,
      height: 70
    })
  );

  enemy.addComponent(
    Components.isColliderObstacle({
      width: 40,
      height: 70
    })
  );

  enemy.addComponent(
    Components.appearance({
      width: 40,
      height: 70,
      color: 'red'
    })
  );

  enemy.addComponent(
    Components.behaviourTree()
  );

  enemy.addComponent(
    Components.hasHealth({
      value: 1500
    })
  );

  return enemy;
}
