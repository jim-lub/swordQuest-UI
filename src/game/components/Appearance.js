export const appearance = ({width, height, color, opacity = 1, type = undefined}) => ({
  appearance: Object.assign({}, {
    type,
    size: {
      width,
      height
    },

    center: {
      x: width / 2,
      y: height / 2
    },

    color: color,
    opacity
  })
});
