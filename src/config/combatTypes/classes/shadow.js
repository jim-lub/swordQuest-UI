import icon_shadowbolt from "assets/abilities/icons/shadow/shadowbolt.png";
import icon_shadowstrike from "assets/abilities/icons/shadow/shadowstrike.png";
import icon_shroudoftheshadows from "assets/abilities/icons/shadow/shroud-of-the-shadows.png";

export const shadowbolt = {
  display_name: 'Shadowbolt',
  ref_name: 'magic_shadow_shadowbolt',
  description: 'Launches a bolt of shadow energy at the enemy target. Causing $(x) Shadow damage.',
  icon: icon_shadowbolt,

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 10
}

export const shadowstrike = {
  display_name: 'Shadowstrike',
  ref_name: 'magic_shadow_shadowstrike',
  description: 'Blast the target with shadow energy, dealing $(x) Shadow damage.',
  icon: icon_shadowstrike,

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
  icon: icon_shroudoftheshadows,

  actionType: 'aura',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 30
}
