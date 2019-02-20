/***********************************************
* The Controls class within the game folder only
* handles the keys that are required for movement.
* All other keys are handled in the interface
************************************************/
class Controls {
  constructor() {
    this.KEY = {
      _name: ['w', 'a', 's', 'd', 'space'],
      _code: [87, 65, 83, 68, 32],
      w: {
        active: false,
        enabled: true,
        timestamp: {keyDown: null, keyUp: null}
      },
      a: {
        active: false,
        enabled: true,
        timestamp: {keyDown: null, keyUp: null}
      },
      s: {
        active: false,
        enabled: true,
        timestamp: {keyDown: null, keyUp: null}
      },
      d: {
        active: false,
        enabled: true,
        timestamp: {keyDown: null, keyUp: null}
      },
      space: {
        active: false,
        enabled: true,
        timestamp: {keyDown: null, keyUp: null}
      }
    };

    this.eventListener_keyDown(this.KEY);
    this.eventListener_keyUp(this.KEY);
  }

  eventListener_keyDown(KEY) {
    document.addEventListener('keydown', (event) => {
      KEY._name.forEach((key, index) => {

        if (KEY._code[index] === event.which && KEY[key].enabled === true) {
          KEY[key].active = true;
          if (!KEY[key].timestamp.keyDown) KEY[key].timestamp.keyDown = Date.now();
        }
      });
    });
  }

  eventListener_keyUp(KEY) {
    document.addEventListener('keyup', (event) => {
      KEY._name.forEach((key, index) => {

        if (KEY._code[index] === event.which) {
          KEY[key].active = false;
          KEY[key].timestamp.keyDown = null;
          KEY[key].timestamp.keyUp = Date.now();
        }
      });
    });
  }

  isPressed(key) {
    if (this.KEY[key].active) return true;
  }

  lastKeyPressed(a, b) {
    if (this.KEY[a].timestamp.keyDown > this.KEY[b].timestamp.keyDown) return true;
  }
}

export const Ctrls = new Controls();
