export const listen = () => ({
  keydown: () => ({
    then(fn) {
      return document.addEventListener('keydown', fn);
    }
  }),
  mouseover: (id) => ({
    then(fn) {
      return document.getElementById(id).addEventListener('mouseover', fn);
    }
  })
});

export const remove = () => ({
  keydown: () => ({
    ref(fn) {
      return document.removeEventListener('keydown', fn)
    }
  }),
  mouseover: (id) => ({
    ref(fn) {
      return document.getElementById(id).removeEventListener('mouseover', fn);
    }
  })
});

export const animation = () => ({
  on: (id) => ({
    duration: (durationInSeconds) => ({
      className(className) {
        document.getElementById(id).className = "";
        window.requestAnimationFrame(function(time) {
          window.requestAnimationFrame(function(time) {
            document.getElementById(id).className = className;
            document.getElementById(id).style.animationDuration = `${durationInSeconds}s`;
          });
        });
      }
    })
  })
});
