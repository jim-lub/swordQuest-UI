import { Vector } from 'game/lib/Vector';

/********************************************************************************
* @ isAbility
* -------------------------------------------------------------------------------
* @phase: The ability entity goes through a series of phaess throughout it's
* lifecycle. All will start on 'queue' until it's their turn to be processed by
* the `AbilityQueueManager`. The available phases are as followed:
* --- start: AbilityManager system will take over from AbilityQueueManager,
* --- anticipation: waiting for casting / attack animation,
* --- action: entity will move around the view,
* --- impact: entity hit an object; not required for all abilities
* --- delete: entity will get deleted before next update cycle
********************************************************************************/
export const isAbility = ({name}) => ({
  defaults: Object.assign({}, {
    type: 'ability',
    ref_name: name,

    position: new Vector(0, 0),
    velocity: new Vector(0, 0),
    acceleration: new Vector(0, 0),
    direction: 0,

    currentLifeCyclePhase: 'start',
    lifeCycle: ['start', 'anticipation', 'action', 'delete'],
    blockNextAbility: false,

    ticks: 0
  })
});
