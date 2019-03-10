import { Controller } from './Controller';

const Data = {
  ctx: null,

  frameID: null,

  running: true,
  started: true,

  dt: 0,
  lastFrameTimeMs: 0,
  timestep: 1000 / 60,

  fps: 60,
  framesThisSecond: 0,
  lastFpsUpdate: 0,

  simulationUpdates: 0,
  regularUpdates: 0
}

async function init(ctx) {
  Data.ctx = ctx;

  ctx.fillStyle = "white";
  ctx.font = "30px Verdana";
  ctx.fillText('Loading...', 400, 250);

  Controller.init()
    .then(() => {
      Data.lastFrameTimeMs = getTimestamp();
      Data.frameID = requestAnimationFrame(loop);
    });
}

function start() {
  if (!Data.started) {
    Data.started = true;

    Data.frameID = requestAnimationFrame((timestamp) => {
      Data.running = true;
      Data.lastFrameTimeMs = getTimestamp();
      Data.lastFpsUpdate = getTimestamp();
      Data.framesThisSecond = 0;

      Data.frameID = requestAnimationFrame(loop);
    });
  }
}

function stop() {
  Data.running = false;
  Data.started = false;

  cancelAnimationFrame(Data.frameID);
}

function loop() {
  if (getTimestamp() > Data.lastFpsUpdate + 1000) {
    Data.fps = 0.25 * Data.framesThisSecond + (1 - 0.25) * Data.fps;

    Data.lastFpsUpdate = getTimestamp();
    Data.framesThisSecond = 0;
  }
  Data.framesThisSecond++;

  Data.dt += getTimestamp() - Data.lastFrameTimeMs;
  Data.lastFrameTimeMs = getTimestamp();

  let numUpdateSteps = 0;
  while (Data.dt >= Data.timestep) {
    update(Data.timestep);

    Data.dt -= Data.timestep;

    if (++numUpdateSteps >= 240) {
      panic();
      break;
    }
  }

  render();

  Data.frameID = requestAnimationFrame(loop);
}

function update(dt) {
  Controller.update();
}

function render() {
  let ctx = Data.ctx;
  ctx.clearRect(0, 0, 940, 540);

  Controller.render(ctx);
}

function panic() {
  Data.dt = 0;
}

function getTimestamp() {
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

export const Game = {
  init,
  start,
  stop
}
