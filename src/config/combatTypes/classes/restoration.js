export const heal = {
  display_name: 'Heal',
  ref_name: 'magic_restoration_heal',
  description: 'Heals a friendly target for $(x).',
  icon: require('assets/abilities/icons/restoration/heal.png'),

  actionType: 'heal',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 10
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
  ref_name: 'magic_restoration_orbs_of_health',
  description: 'Emits $(x) healing orbs around the player. When a player or friendly walks over an orb they get healed for $(x).',
  icon: require('assets/abilities/icons/restoration/orbs-of-health.png'),

  actionType: 'heal',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 30
}
