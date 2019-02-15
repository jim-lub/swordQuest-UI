export const ACTIONBAR_ABILITIES = () => {
  const abilities = new Map();

  abilities.set(0, {
    status: 'active',
    combatType: 'melee',
    class: 'warrior',
    ability: 'swordstrike'
  });

  abilities.set(1, {
    status: 'active',
    combatType: 'melee',
    class: 'warrior',
    ability: 'mortalStrike'
  });

  abilities.set(2, {
    status: 'active',
    combatType: 'magic',
    class: 'fire',
    ability: 'fireball'
  });

  abilities.set(3, {
    status: 'active',
    combatType: 'magic',
    class: 'frost',
    ability: 'frostbolt'
  });

  abilities.set(4, {
    status: 'active',
    combatType: 'magic',
    class: 'restoration',
    ability: 'heal'
  });

  abilities.set(5, {
    status: 'empty'
  });

  abilities.set(6, {
    status: 'empty'
  });


  abilities.set(7, {
    status: 'locked'
  });

  abilities.set(8, {
    status: 'active',
    combatType: 'magic',
    class: 'restoration',
    ability: 'shield'
  });

  abilities.set(9, {
    status: 'active',
    combatType: 'magic',
    class: 'shadow',
    ability: 'shroudOfTheShadows'
  });

  return abilities;
}
