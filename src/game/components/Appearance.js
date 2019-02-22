import { Components } from 'game/EntityComponentSystem';


Components.appearance = ({width, height, color, opacity = 1}) => ({
  appearance: Object.assign({}, {
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
