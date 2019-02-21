export const frostbolt = {
  display_name: 'Frostbolt',
  ref_name: 'magic_frost_frostbolt',
  description: 'Quickly flings a shard of ice at the target, dealing $(x) Frost damage.',
  icon: require('assets/abilities/icons/frost/frostbolt.png'),

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 1,

  ticksPerPhase: {
    start: 0,
    anticipation: 30,
    action: 70,
    impact: 10
  },

  speed: {
    value: [20, 20],
    velocityMultiplier: true
  },

  rate: null,
  initialVelocity: null,
  decay: null,

  devVisuals: {
    colors: {
      anticipation: '#075fef',
      action: '#a5c7ff',
      impact: '#639eff'
    },
    size: {
      anticipation: [30, 30],
      action: [30, 30],
      impact: [80, 5]
    },
    offset: {
      anticipation: [0, -150]
    }
  }
}

export const iceBarrier = {
  display_name: 'Ice Barrier',
  ref_name: 'magic_frost_ice_barrier',
  description: 'Shields you with ice, absorbing $(x) damage. The shield will expire after $(x) seconds.',
  icon: require('assets/abilities/icons/frost/ice-barrier.png'),

  actionType: 'absorb',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 30
}
