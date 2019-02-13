import $ from "jquery";

/* jshint esversion: 6 */
export class Controls {
  constructor() {
    this.KEY = {
      _name: ['w', 'a', 's', 'd', 'space', 'shift'], //  array with key NAMES
      _code: [87, 65, 83, 68, 32, 16], // array with key CODES
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
      },
      shift: {
        active: false,
        enabled: true,
        timestamp: {keyDown: null, keyUp: null}
      }
    };

    this.MOUSE = {
      _name: ['leftClick', 'middleClick', 'rightClick'], // array with mouse NAMES
      _code: [1, 2, 3], // arrray with mouse CODES
      leftClick: {
        active: false,
        enabled: true,
        timestamp: {mouseDown: null, mouseUp: null}
      },
      middleClick: {
        active: false,
        enabled: true,
        timestamp: {mouseDown: null, mouseUp: null}
      },
      rightClick: {
        active: false,
        enabled: true,
        timestamp: {mouseDown: null, mouseUp: null}
      }
    };

    this.eventListener_keyDown(this.KEY);
    this.eventListener_keyUp(this.KEY);
    this.eventListener_mouseDown(this.MOUSE);
    this.eventListener_mouseUp(this.MOUSE);
    this.eventListener_mouseOut(this.MOUSE);
  }

  eventListener_keyDown(KEY) {
    $('body').keydown(function(event) {

      KEY._name.forEach((key, index) => {

        if (KEY._code[index] === event.which && KEY[key].enabled === true) {
          KEY[key].active = true;
          if (!KEY[key].timestamp.keyDown) KEY[key].timestamp.keyDown = Date.now();
        }
      });
    });
  }

  eventListener_keyUp(KEY) {
    $('body').keyup(function(event) {

      KEY._name.forEach((key, index) => {

        if (KEY._code[index] === event.which) {
          KEY[key].active = false;
          KEY[key].timestamp.keyDown = null;
          KEY[key].timestamp.keyUp = Date.now();
        }
      });
    });
  }

  eventListener_mouseDown(MOUSE) {
    $('#canvas').mousedown(function(event) {

      MOUSE._name.forEach((mouse, index) => {

        if (MOUSE._code[index] === event.which && MOUSE[mouse].enabled === true) {
          MOUSE[mouse].active = true;
          if (!MOUSE[mouse].timestamp.mouseDown) MOUSE[mouse].timestamp.mouseDown = Date.now();
        }
      });
    });
  }

  eventListener_mouseUp(MOUSE) {
    $('#canvas').mouseup(function(event) {

      MOUSE._name.forEach((mouse, index) => {

        if (MOUSE._code[index] === event.which) {
          MOUSE[mouse].active = false;
          MOUSE[mouse].timestamp.mouseDown = null;
          MOUSE[mouse].timestamp.mouseUp = Date.now();
        }
      });
    });
  }

  eventListener_mouseOut(MOUSE) {
    $('#canvas').mouseout(function(event) {

      MOUSE._name.forEach((mouse, index) => {

        if (MOUSE._code[index] === event.which) {
          MOUSE[mouse].active = false;
          MOUSE[mouse].timestamp.mouseDown = null;
          MOUSE[mouse].timestamp.mouseUp = Date.now();
        }
      });
    });
  }

  isPressed(key) {
    if (this.KEY[key].active) return true;
  }

  isClicked(btn) {
    if (this.MOUSE[btn].active) return true;
  }

  isReleased(btn) {
    if (!this.MOUSE[btn].active) return true;
  }

  lastKeyPressed(a, b) {
    if (this.KEY[a].timestamp.keyDown > this.KEY[b].timestamp.keyDown) return true;
  }
}
