export const newListener = () => ({
  keydown(fn) {
    return document.addEventListener('keydown', fn);
  },

  mouseover(id, fn) {
    return document.getElementById(id).addEventListener('mouseover', fn);
  },

  mouseout(id, fn) {
    return document.getElementById(id).addEventListener('mouseout', fn);
  }
});

export const removeListener = () => ({
  keydown(fn) {
    return document.removeEventListener('keydown', fn);
  },

  mouseover(id, fn) {
    if (!document.getElementById(id)) return;
    return document.getElementById(id).removeEventListener('mouseover', fn);
  },

  mouseout(id, fn) {
    if (!document.getElementById(id)) return;
    return document.getElementById(id).removeEventListener('mouseout', fn);
  }
});
