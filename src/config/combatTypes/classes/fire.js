export const fireball = {
  display_name: 'Fireball',
  ref_name: 'magic_fire_fireball',
  description: 'Hurls a fiery ball that causes $(x) Fire damage.',
  icon: require('assets/abilities/icons/fire/fireball.png'),

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 1,

  ticksPerPhase: {
    start: 0,
    anticipation: 30,
    action: 50,
    impact: 10
  },

  speed: {
    value: [50, 0],
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
      action: [25, 25],
      impact: [50, 50]
    },
    offset: {
      anticipation: [35, 20]
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
