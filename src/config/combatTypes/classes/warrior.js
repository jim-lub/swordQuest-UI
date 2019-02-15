export const swordstrike = {
  display_name: 'Swordstrike',
  ref_name: 'melee_warrior_swordstrike',
  description: 'Strikes all enemies in front of you with a sweeping attack for $(x) Physical damage.',
  icon: require('assets/abilities/icons/warrior/swordstrike.png'),

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 0
}

export const mortalStrike = {
  display_name: 'Mortal Strike',
  ref_name: 'melee_warrior_mortal_strike',
  description: 'A vicious strike that deals $(x) Physical damage.',
  icon: require('assets/abilities/icons/warrior/mortal-strike.png'),

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 5
}
