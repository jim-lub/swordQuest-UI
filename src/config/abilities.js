import * as melee from './combatTypes/melee';
import * as ranged from './combatTypes/ranged';
import * as magic from './combatTypes/magic';

const refNameToComponents = (ref_name) => {
  const [combatType, className, abilityName] = ref_name.split("_");

  return {
    combatType,
    className,
    abilityName
  }
}

const enabledAbilitiesArr = [
  'melee_warrior_swordstrike', 'melee_warrior_mortalStrike',
  'magic_fire_fireball', 'magic_fire_scorch',
  'magic_frost_frostbolt', 'magic_frost_iceBarrier',
  'magic_shadow_shadowbolt', 'magic_shadow_shadowstrike', 'magic_shadow_shroudOfTheShadows', 'magic_shadow_shadowDash',
  'magic_restoration_heal', 'magic_restoration_shield', 'magic_restoration_orbsOfHealth'
];

export const Abilities = {
  ...melee,
  ...ranged,
  ...magic,
  refNameToComponents,
  enabledAbilitiesArr
}
