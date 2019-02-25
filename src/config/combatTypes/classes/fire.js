export const fireball = {
  display_name: 'Fireball',
  ref_name: 'magic_fire_fireball',
  description: 'Hurls a fiery ball that causes $(x) Fire damage.',
  icon: require('assets/abilities/icons/fire/fireball.png'),

  cooldown: 1,

  actionType: 'attack',
  collisionType: 'impact', // passthrough, none
  patterns: [
    {
      type: 'circular',
      radius: 15,
      pointsToEmit: 20,
      rotatingArcSize: 270,
      offset: {
        x: 0,
        y: 0
      }
    },
    {
      type: 'circular',
      radius: 5,
      pointsToEmit: 5,
      rotatingArcSize: 270,
      offset: {
        x: -60,
        y: 0
      }
    },
    {
      type: 'circular',
      radius: 10,
      pointsToEmit: 15,
      rotatingArcSize: 270,
      offset: {
        x: -35,
        y: 0
      }
    }
  ],

  lifeCycleDurationInTicks: {
    start: 0,
    anticipation: 30,
    action: 100,
    impact: 10
  },

  actionPhaseSpeed: {
    acceleration: [0, 0],
    velocity: [25, 0.5]
  },

  damage: null,
  heal: null,
  absorb: null,

  ticksPerPhase: {
    start: 0,
    anticipation: 30,
    action: 100,
    impact: 10
  },

  speed: {
    value: [25, 0.5],
    velocityMultiplier: true
  },

  rate: null,
  initialVelocity: null,
  decay: null,

  devVisuals: {
    colors: {
      anticipation: '#efc407',
      action: '#ff9d00',
      impact: '#ff6600'
    },
    size: {
      anticipation: [10, 10],
      action: [5, 5],
      impact: [50, 50]
    },
    offset: {
      anticipation: [35, 0]
    }
  }
}

export const scorch = {
  display_name: 'Scorch',
  ref_name: 'magic_fire_scorch',
  description: 'Scorches an enemy for $(x) Fire damage.',
  icon: require('assets/abilities/icons/fire/scorch.png'),

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 10
}
