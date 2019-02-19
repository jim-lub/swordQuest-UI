import { Components } from 'game/EntityComponentSystem';

Components.Defaults = function() {
  // this.removeAfterNextUpdate = true;

  return this;
}
Components.Defaults.prototype.name = 'defaults';
