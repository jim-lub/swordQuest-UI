import { Components } from 'game/EntityComponentSystem';
import { Vector } from 'game/lib/Vector';

/********************************************************************************
* @ isDynamic
* -------------------------------------------------------------------------------
* @
********************************************************************************/
Components.isDynamic = function({x = 0, y = 0, direction = 0}) {
  this.type = 'dynamic';
  this.position = new Vector(x, y);
  this.velocity = new Vector(0, 0);
  this.acceleration = new Vector(0, 0);
  this.direction = direction;

  return this;
}
Components.isDynamic.prototype.name = 'defaults';
