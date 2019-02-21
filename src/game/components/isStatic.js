import { Components } from 'game/EntityComponentSystem';
import { Vector } from 'game/lib/Vector';

/********************************************************************************
* @ isStatic
* -------------------------------------------------------------------------------
* @
********************************************************************************/
Components.isStatic = ({x = 0, y = 0}) => ({
  defaults: Object.assign({}, {
    type: 'static',
    position: new Vector(x, y)
  })
});
