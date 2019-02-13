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
    combatType: 'melee',
    class: 'warrior',
    ability: 'swordstrike'
  });

  abilities.set(1, {
    combatType: 'melee',
    class: 'warrior',
    ability: 'mortalStrike'
  });

  abilities.set(2, {
    combatType: 'magic',
    class: 'fire',
    ability: 'fireball'
  });

  abilities.set(3, {
    combatType: 'magic',
    class: 'frost',
    ability: 'frostbolt'
  });

  abilities.set(4, {
    combatType: 'magic',
    class: 'restoration',
    ability: 'shield'
  });

  abilities.set(5, {
    combatType: 'magic',
    class: 'restoration',
    ability: 'heal'
  });

  abilities.set(6, {
    combatType: 'magic',
    class: 'shadow',
    ability: 'shroudOfTheShadows'
  });

  abilities.set(7, {
    combatType: 'none'
  });

  abilities.set(8, {
    combatType: 'none'
  });


  abilities.set(9, {
    combatType: 'none'
  });

  return abilities;
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
