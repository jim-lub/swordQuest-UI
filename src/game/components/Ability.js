import { Components } from 'game/EntityComponentSystem';

Components.Ability = function(type, ref_name, ticks) {
  this.type = type;
  this.ref_name = ref_name;
  this.active = true;
  this.ticksRemaining = ticks;

  return this;
}
Components.Ability.prototype.name = 'ability';
