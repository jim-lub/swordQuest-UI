import { Components } from 'game/EntityComponentSystem';

/********************************************************************************
* @ isCollider
* -------------------------------------------------------------------------------
* @
********************************************************************************/
Components.isCollider = function({height, width}) {
  this.collisionBox = {
    width,
    height
  }

  this.collisionOnAxis = {
    x: false,
    y: false
  }

  return this;
}
Components.isCollider.prototype.name = 'collider';
