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

  ticks: {
    anticipation: 40,
    action: 100
  },

  speed: {
    value: [25, 5],
    velocityMultiplier: 2
  },

  color: 'blue',
  size: [20, 20]
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
