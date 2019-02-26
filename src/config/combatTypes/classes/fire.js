export const fireball = {
  active: true,
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
      radius: 10,
      pointsToEmit: 15,
      rotatingArcSize: 270,
      offset: {
        x: -35,
        y: 0
      }
    }
  ],

  actionPhase: {
    duration: 100,
    initialVelocity: null,
    customAccelerationCurve: true,
    accelerationStatic: [100, -100],
    // accelerationCurveNodes: [
    //   [0, 5, 10, -400],
    //   [6, 15, 30, -300],
    //   [16, 25, 50, -200],
    //   [26, 35, 70, -100],
    //   [36, 100, 90, -0],
    // ]
    accelerationCurveNodes: [
      [0, 5, 10, -400],
      [6, 59, 180, -100],
      [60, 70, 60, -40],
    ]
  },

  lifeCycleDurationInTicks: {
    start: 0,
    anticipation: 30,
    action: 70,
    impact: 10
  },

  damage: null,
  heal: null,
  absorb: null,

  rate: null,
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
      anticipation: [15, 0]
    }
  }
}

export const scorch = {
  active: true,
  display_name: 'Scorch',
  ref_name: 'magic_fire_scorch',
  description: 'Scorches an enemy for $(x) Fire damage.',
  icon: require('assets/abilities/icons/fire/scorch.png'),

  cooldown: 1,

  actionType: 'attack',
  collisionType: 'impact', // passthrough, none
  patterns: [
    {
      type: 'circular',
      radius: 20,
      pointsToEmit: 20,
      rotatingArcSize: 90,
      offset: {
        x: 0,
        y: 0
      }
    },
    {
      type: 'circular',
      radius: 15,
      pointsToEmit: 30,
      rotatingArcSize: 90,
      offset: {
        x: 0,
        y: 0
      }
    },
    {
      type: 'circular',
      radius: 10,
      pointsToEmit: 40,
      rotatingArcSize: 90,
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
    // accelerationCurveNodes: [
    //   [0, 5, 10, -400],
    //   [6, 15, 30, -300],
    //   [16, 25, 50, -200],
    //   [26, 35, 70, -100],
    //   [36, 100, 90, -0],
    // ]
    accelerationCurveNodes: [
      [0, 5, 10, -350],
      [6, 200, 5, -98]
    ]
  },

  lifeCycleDurationInTicks: {
    start: 0,
    anticipation: 20,
    action: 200,
    impact: 0
  },

  damage: null,
  heal: null,
  absorb: null,

  rate: null,
  decay: null,

  devVisuals: {
    colors: {
      anticipation: '#efc407',
      action: '#ff9d00',
      impact: '#ff6600'
    },
    size: {
      anticipation: [15, 15],
      action: [5, 5],
      impact: [0, 0]
    },
    offset: {
      anticipation: [15, 0]
    }
  }
}
