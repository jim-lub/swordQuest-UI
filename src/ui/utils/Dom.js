export const newListener = () => ({
  keydown(fn) {
    return document.addEventListener('keydown', fn);
  },

  mouseover(id, fn) {
    return document.getElementById(id).addEventListener('mouseover', fn);
  }
});

export const removeListener = () => ({
  keydown(fn) {
    return document.removeEventListener('keydown', fn);
  },

  mouseover(id, fn) {
    return document.getElementById(id).removeEventListener('mouseover', fn);
  }
});
