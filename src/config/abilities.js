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

export const Abilities = {
  ...melee,
  ...ranged,
  ...magic,
  refNameToComponents
}
