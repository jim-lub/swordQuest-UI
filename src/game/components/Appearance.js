import { Components } from 'game/EntityComponentSystem';

Components.Appearance = function ComponentRender (width, height, color) {
  this.size = {
    width,
    height
  }
  this.color = color;

  return this;
}
Components.Appearance.prototype.name = 'appearance';
