export const isColliderObstacle = ({height, width}) => ({
  colliderObstacle: Object.assign({}, {
    collisionBox: {
      width,
      height
    }
  })
});
