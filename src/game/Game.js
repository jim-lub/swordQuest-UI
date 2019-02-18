let ctx = "";

const animationFrameData = {
  frameID: null,
  running: true,
  started: true,
  dt: 0,
  lastFrameTimeMs: 0,
  timestep: 1000 / 60,
  fps: 60,
  framesThisSecond: 0,
  lastFpsUpdate: 0
};

const blocks = [
  {
    x: 250,
    y: 250,
    velX: 1,
    velY: 0,
    width: 50,
    height: 20,
    color: 'red'
  },
  {
    x: 250,
    y: 250,
    velX: 1,
    velY: -1,
    width: 30,
    height: 50,
    color: 'blue'
  },
  {
    x: 250,
    y: 250,
    velX: 2,
    velY: 1,
    width: 50,
    height: 50,
    color: 'green'
  }];

 export function init(ctxinput) {
   ctx = ctxinput;
  animationFrameData.frameID = requestAnimationFrame(loop);
}

function loop() {

  if (_timestamp() > animationFrameData.lastFpsUpdate + 1000) {
    animationFrameData.fps = 0.25 * animationFrameData.framesThisSecond + (1 - 0.25) * animationFrameData.fps;

    animationFrameData.lastFpsUpdate = _timestamp();
    animationFrameData.framesThisSecond = 0;
  }
  animationFrameData.framesThisSecond++;

  animationFrameData.dt += _timestamp() - animationFrameData.lastFrameTimeMs;
  animationFrameData.lastFrameTimeMs = _timestamp();

  let numUpdateSteps = 0;
  while (animationFrameData.dt >= animationFrameData.timestep) {
    _update(animationFrameData.timestep);
    animationFrameData.dt -= animationFrameData.timestep;

    if (++numUpdateSteps >= 240) {
      _panic();
      break;
    }
  }

  _render();

  animationFrameData.frameID = requestAnimationFrame(loop);
}

function _panic() {
  animationFrameData.dt = 0;
}

export function start() {
  if (!animationFrameData.started) {
    animationFrameData.started = true;

    animationFrameData.frameID = requestAnimationFrame(function(timestamp) {
      _render(1);
      animationFrameData.running = true;

      animationFrameData.lastFrameTimeMs = _timestamp();
      animationFrameData.lastFpsUpdate = _timestamp();

      animationFrameData.framesThisSecond = 0;

      animationFrameData.frameID = requestAnimationFrame(loop);
    });
  }
}

export function stop() {
  animationFrameData.running = false;
  animationFrameData.started = false;

  cancelAnimationFrame(animationFrameData.frameID);
}

function _timestamp() {
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

function _update() {
  blocks.forEach(block => {
    if (block.x > 940) block.x = 0;
    if (block.y > 540) block.y = 0;
    if (block.x < 0) block.x = 940;
    if (block.y < 0) block.y = 540;
    block.x += block.velX;
    block.y += block.velY
  });
}

function _render() {
  ctx.clearRect(0, 0, 940, 540);

  blocks.forEach(block => {
    ctx.fillStyle = block.color;
    ctx.fillRect(block.x, block.y, block.width, block.height);
  });
}
