import icon_frostbolt from "assets/abilities/icons/frost/frostbolt.png";
import icon_icebarrier from "assets/abilities/icons/frost/ice-barrier.png";

export const frostbolt = {
  display_name: 'Frostbolt',
  ref_name: 'magic_frost_frostbolt',
  description: 'Quickly flings a shard of ice at the target, dealing $(x) Frost damage.',
  icon: icon_frostbolt,

  actionType: 'attack',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 10
}

export const iceBarrier = {
  display_name: 'Ice Barrier',
  ref_name: 'magic_frost_ice_barrier',
  description: 'Shields you with ice, absorbing $(x) damage. The shield will expire after $(x) seconds.',
  icon: icon_icebarrier,

  actionType: 'absorb',

  damage: null,
  heal: null,
  absorb: null,

  cooldown: 30
}
