import icon_fireball from "assets/abilities/icons/fire/fireball.png";
import icon_scorch from "assets/abilities/icons/fire/scorch.png";

export const fireball = {
  display_name: 'Fireball',
  ref_name: 'magic_fire_fireball',
  description: 'Hurls a fiery ball that causes $(x) Fire damage.',
  icon: icon_fireball,

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 3
}

export const scorch = {
  display_name: 'Scorch',
  ref_name: 'magic_fire_scorch',
  description: 'Scorches an enemy for $(x) Fire damage.',
  icon: icon_scorch,

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 10
}
