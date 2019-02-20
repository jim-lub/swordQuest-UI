import { Components } from 'game/EntityComponentSystem';

/********************************************************************************
* @ Ability
* -------------------------------------------------------------------------------
* @phase: The ability entity goes through a series of phaess throughout it's
* lifecycle. All will start on 'queue' until it's their turn to be processed by
* the `AbilityQueueManager`. The available phases are as followed:
* --- queue: awaiting processing by abilitiesQueue,
* --- start: AbilityManager system will take over from AbilityQueueManager,
* --- anticipation: waiting for casting / attack animation,
* --- action: entity will move around the view,
* --- impact: entity hit an object; not required for all abilities
* --- delete: entity will get deleted before next update cycle
********************************************************************************/
Components.Ability = function(type, ref_name) {
  this.type = type;
  this.ref_name = ref_name;
  this.currentLifeCyclePhase = 'queue';
  this.ticks = 0;
  this.direction = 0;

  return this;
}
Components.Ability.prototype.name = 'ability';
