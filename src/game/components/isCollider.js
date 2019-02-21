import { Components } from 'game/EntityComponentSystem';

/********************************************************************************
* @ isCollider
* -------------------------------------------------------------------------------
* @
********************************************************************************/
Components.isCollider = ({height, width}) => ({
  collider: Object.assign({}, {
    collisionBox: {
      width,
      height
    },

    collisionOnAxis: {
      x: false,
      y: false
    }
  })
});
