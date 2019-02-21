import { Components } from 'game/EntityComponentSystem';


Components.appearance = ({width, height, color, opacity = 1}) => ({
  appearance: Object.assign({}, {
    size: {
      width,
      height
    },
    color: color,
    opacity
  })
});
