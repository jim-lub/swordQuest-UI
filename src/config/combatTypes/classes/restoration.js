export const heal = {
  display_name: 'Heal',
  ref_name: 'magic_restoration_heal',
  description: 'Heals a friendly target for $(x).',
  icon: require('assets/abilities/icons/restoration/heal.png'),

  actionType: 'heal',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 15,

  ticksPerPhase: {
    start: 0,
    anticipation: 100,
    action: 10,
    impact: 10
  },

  speed: {
    value: [0, -5],
    velocityMultiplier: true
  },

  rate: null,
  initialVelocity: null,
  decay: null,

  devVisuals: {
    colors: {
      anticipation: 'green',
      action: 'green',
      impact: 'green'
    },
    size: {
      anticipation: [20, 10],
      action: [60, 25],
      impact: [40, 25]
    },
    offset: {
      anticipation: [0, -30]
    }
  }
}

export const shield = {
  display_name: 'Shield',
  ref_name: 'magic_restoration_shield',
  description: 'Shields a friendly target, absorbing $(x) damage for $(x) sec. Once shielded, the target cannot be shielded again for $(x) sec.',
  icon: require('assets/abilities/icons/restoration/shield.png'),

  actionType: 'absorb',

  damage: null,
  heal: null,
  absorb: {
    amount: null,
    percentage: null,
    duration: null
  },

  cooldown: 10
}

export const orbsOfHealth = {
  display_name: 'Orbs of Health',
  ref_name: 'magic_restoration_orbsOfHealth',
  description: 'Emits $(x) healing orbs around the player. When a player or friendly walks over an orb they get healed for $(x).',
  icon: require('assets/abilities/icons/restoration/orbs-of-health.png'),

  actionType: 'heal',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 30
}
