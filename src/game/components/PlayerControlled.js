import { Components } from 'game/EntityComponentSystem';

Components.Player = function ComponentPlayerControlled () {
  this.value = true;

  return this;
}
Components.Player.prototype.name = 'isPlayerControlled';
