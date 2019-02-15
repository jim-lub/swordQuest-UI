export const keyCodeToKey = (keyCode) => {
  let keys = new Map([
    [87, 'w'],
    [65, 'a'],
    [83, 's'],
    [68, 'd'],
    [32, 'space'],
    [16, 'shift'],
    [49, '1'],
    [50, '2'],
    [51, '3'],
    [52, '4'],
    [53, '5'],
    [54, '6'],
    [55, '7'],
    [56, '8'],
    [57, '9']
  ]);

  if (keys.has(keyCode)) {
    return keys.get(keyCode);
  }

  return null;
}
