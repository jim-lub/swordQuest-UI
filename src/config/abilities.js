import * as melee from './combatTypes/melee';
import * as ranged from './combatTypes/ranged';
import * as magic from './combatTypes/magic';

export const Abilities = {
  ...melee,
  ...ranged,
  ...magic
}
