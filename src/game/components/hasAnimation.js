export const hasAnimation = ({type = undefined}) => ({
  animation: Object.assign({}, {
    type,
    sprite: null,
    data: {
      sX: 0,
      sY: 0,
      sWidth: 90,
      sHeight: 70,
      offsetX: 0,
      offsetY: 0
    },
    index: null,
    tickCount: 0
  })
});
