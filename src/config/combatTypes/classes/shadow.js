export const shadowbolt = {
  active: true,
  display_name: 'Shadowbolt',
  ref_name: 'magic_shadow_shadowbolt',
  description: 'Launches a bolt of shadow energy at the enemy target. Causing $(x) Shadow damage.',
  icon: require('assets/abilities/icons/shadow/shadowbolt.png'),

  cooldown: 1,

  actionType: 'attack',
  collisionType: 'passthrough',
  patterns: [
    {
      type: 'circular',
      radius: 10,
      pointsToEmit: 40,
      rotatingArcSize: 310,
      offset: {
        x: 0,
        y: 0
      }
    }
  ],

  actionPhase: {
    duration: 200,
    initialVelocity: null,
    customAccelerationCurve: true,
    accelerationStatic: [100, -100],
    accelerationCurveNodes: [
      [0, 4, 10, -400],
      [5, 49, 30, -110],
      [50, 99, 30, -90],
      [100, 149, 30, -110],
      [150, 200, 30, -90],
    ]
  },

  lifeCycleDurationInTicks: {
    start: 0,
    anticipation: 30,
    action: 200,
    impact: 10
  },

  damage: 0.2,
  heal: 0,
  absorb: 0,

  devVisuals: {
    colors: {
      anticipation: 'purple',
      action: 'purple',
      impact: 'purple'
    },
    size: {
      anticipation: [5, 5],
      action: [10, 10],
      impact: [0, 0]
    },
    offset: {
      anticipation: [20, 0]
    }
  }
}

export const shadowDash = {
  active: false,
  display_name: 'Dash',
  ref_name: 'magic_shadow_shadowDash',
  description: 'Dash at high velocity in the direction currently facing.',
  icon: require('assets/abilities/icons/shadow/shadow-dash.png'),

  actionType: 'movement',

  cooldown: 2
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
  ref_name: 'magic_shadow_shroudOfTheShadows',
  description: 'Hides the player in the shadows, greatly reducing the range in which you are spotted by the enemy.',
  icon: require('assets/abilities/icons/shadow/shroud-of-the-shadows.png'),

  actionType: 'aura',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 30
}
