export const isOnCooldown = (cooldown, globalCooldown) => {
  if (cooldown > 0) {
    return true;
  }

  if (globalCooldown > 0) {
    return true;
  }

  return false;
}

export const newEventListener = () => ({
  keydown(fn) {
    return document.addEventListener('keydown', fn);
  },
  mouseover(id, fn) {
    return document.getElementById(id).addEventListener('mouseover', fn);
  }
})

export const removeEventListener = () => ({
  keydown(fn) {
    return document.removeEventListener('keydown', fn)
  },
  mouseover(id, fn) {
    return document.getElementById(id).removeEventListener('mouseover', fn);
  }
})

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

export const animations = () => ({
  cooldown(id, cooldown) {
    document.getElementById(id).className = "";
    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.getElementById(id).className = "UI-actionbar-ability-cooldown-overlay";
        document.getElementById(id).style.animationDuration = `${cooldown}s`;
      });
    });
  }
});
