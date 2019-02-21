import { Components } from 'game/EntityComponentSystem';


Components.appearance = ({width, height, color}) => ({
  appearance: Object.assign({}, {
    size: {
      width,
      height
    },
    color: color
  })
});
