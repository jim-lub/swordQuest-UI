import { Components } from 'game/EntityComponentSystem';
import { Vector } from 'game/lib/Vector';

/********************************************************************************
* @ isStatic
* -------------------------------------------------------------------------------
* @
********************************************************************************/
Components.isStatic = function({x = 0, y = 0}) {
  this.type = 'static';
  this.position = new Vector(x, y);

  return this;
}
Components.isStatic.prototype.name = 'defaults';
