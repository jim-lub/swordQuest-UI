import { Components } from 'game/EntityComponentSystem';

/********************************************************************************
* @ isColliderObstacle
* -------------------------------------------------------------------------------
* @
********************************************************************************/
Components.isColliderObstacle = function({height, width}) {
  this.collisionBox = {
    width,
    height
  }

  return this;
}
Components.isColliderObstacle.prototype.name = 'colliderObstacle';
