export const frostbolt = {
  active: true,
  display_name: 'Frostbolt',
  ref_name: 'magic_frost_frostbolt',
  description: 'Quickly flings a shard of ice at the target, dealing $(x) Frost damage.',
  icon: require('assets/abilities/icons/frost/frostbolt.png'),

  cooldown: 1,
  actionType: 'attack',
  collisionType: 'passthrough',
  patterns: [
    {
      type: 'circular',
      radius: 25,
      pointsToEmit: 40,
      rotatingArcSize: 310,
      offset: {
        x: 0,
        y: 0
      }
    }
  ],

  actionPhase: {
    duration: 100,
    initialVelocity: null,
    customAccelerationCurve: true,
    accelerationStatic: [100, -100],
    accelerationCurveNodes: [
      [0, 5, 10, -400],
      [6, 15, 30, -300],
      [16, 25, 50, -200],
      [26, 35, 70, -100],
      [36, 100, 90, -0],
    ]
  },

  lifeCycleDurationInTicks: {
    start: 0,
    anticipation: 30,
    action: 100,
    impact: 10
  },

  damage: null,
  heal: null,
  absorb: null,

  devVisuals: {
    colors: {
      anticipation: '#075fef',
      action: '#a5c7ff',
      impact: '#639eff'
    },
    size: {
      anticipation: [10, 10],
      action: [20, 20],
      impact: [0, 0]
    },
    offset: {
      anticipation: [10, -30]
    }
  }
}

export const iceBarrier = {
  display_name: 'Ice Barrier',
  ref_name: 'magic_frost_iceBarrier',
  description: 'Shields you with ice, absorbing $(x) damage. The shield will expire after $(x) seconds.',
  icon: require('assets/abilities/icons/frost/ice-barrier.png'),

  actionType: 'absorb',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 30
}
