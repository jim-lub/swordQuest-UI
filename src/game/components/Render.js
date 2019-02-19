import { Components } from 'game/EntityComponentSystem';

Components.Render = function ComponentRender (width, height, color) {
  this.size = {
    width,
    height
  }
  this.color = color;

  return this;
}
Components.Render.prototype.name = 'render';
