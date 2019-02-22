export const isCollider = ({height, width}) => ({
  collider: Object.assign({}, {
    collisionBox: {
      width,
      height
    },

    center: {
      x: width / 2,
      y: height / 2
    },

    collisionPoints: [],

    collisionOnAxis: {
      x: false,
      y: false
    }
  })
});
