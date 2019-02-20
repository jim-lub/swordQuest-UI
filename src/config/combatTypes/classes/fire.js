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

  ticks: {
    anticipation: 30,
    action: 80
  },

  speed: {
    value: [50, 1],
    velocityMultiplier: 2
  },

  color: 'orange',
  size: [20, 20]
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
