export const CONTROLS_SCHEME = () => {
  const controls = new Map();

  controls.set(0, '1');
  controls.set(1, '2');
  controls.set(2, '3');
  controls.set(3, '4');
  controls.set(4, '5');
  controls.set(5, '6');
  controls.set(6, '7');
  controls.set(7, '8');
  controls.set(8, 'shift');
  controls.set(9, 'space');

  return controls;
}

export const ABILITIES_ON_BAR = () => {
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

export const getActionbarArray = () => {
  return [...ABILITIES_ON_BAR().values()];
}

export const getAbilityBarArray = () => {
  const abilities = ABILITIES_ON_BAR();
  const arr = [];

  for (let i = 0; i < abilities.size; i++) {
    arr.push(
      abilities.get(i)
    )
  }

  return arr;
}
