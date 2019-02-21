import { Components } from 'game/EntityComponentSystem';

/********************************************************************************
* @ isColliderObstacle
* -------------------------------------------------------------------------------
* @
********************************************************************************/
Components.isColliderObstacle = ({height, width}) => ({
  colliderObstacle: Object.assign({}, {
    collisionBox: {
      width,
      height
    }
  })
});
