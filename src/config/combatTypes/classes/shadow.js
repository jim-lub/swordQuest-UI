export const shadowbolt = {
  display_name: 'Shadowbolt',
  ref_name: 'magic_shadow_shadowbolt',
  description: 'Launches a bolt of shadow energy at the enemy target. Causing $(x) Shadow damage.',
  icon: require('assets/abilities/icons/shadow/shadowbolt.png'),

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 1,

  ticksPerPhase: {
    start: 0,
    anticipation: 30,
    action: 100,
    impact: 10
  },

  speed: {
    value: [20, -1],
    velocityMultiplier: true
  },

  rate: null,
  initialVelocity: null,
  decay: null,

  devVisuals: {
    colors: {
      anticipation: 'purple',
      action: 'purple',
      impact: 'purple'
    },
    size: {
      anticipation: [15, 15],
      action: [10, 10],
      impact: [30, 30]
    },
    offset: {
      anticipation: [40, 0]
    }
  }
}

export const shadowstrike = {
  display_name: 'Shadowstrike',
  ref_name: 'magic_shadow_shadowstrike',
  description: 'Blast the target with shadow energy, dealing $(x) Shadow damage.',
  icon: require('assets/abilities/icons/shadow/shadowstrike.png'),

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 20
}

export const shroudOfTheShadows = {
  display_name: 'Shroud of the Shadows',
  ref_name: 'magic_shadow_shroud_of_the_shadows',
  description: 'Hides the player in the shadows, greatly reducing the range in which you are spotted by the enemy.',
  icon: require('assets/abilities/icons/shadow/shroud-of-the-shadows.png'),

  actionType: 'aura',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 30
}
