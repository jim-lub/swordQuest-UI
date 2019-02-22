import { Controller } from './Controller';

const DataObj = {
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

function init(ctx) {
  DataObj.ctx = ctx;
  Controller.init();
  DataObj.frameID = requestAnimationFrame(loop);
}

function start() {
  if (!DataObj.started) {
    DataObj.started = true;

    DataObj.frameID = requestAnimationFrame((timestamp) => {
      render(1);
      DataObj.running = true;
      DataObj.lastFrameTimeMs = getTimestamp();
      DataObj.lastFpsUpdate = getTimestamp();
      DataObj.framesThisSecond = 0;

      DataObj.frameID = requestAnimationFrame(loop);
    });
  }
}

function stop() {
  DataObj.running = false;
  DataObj.started = false;

  cancelAnimationFrame(DataObj.frameID);
}

function loop() {
  if (getTimestamp() > DataObj.lastFpsUpdate + 1000) {
    DataObj.fps = 0.25 * DataObj.framesThisSecond + (1 - 0.25) * DataObj.fps;

    DataObj.lastFpsUpdate = getTimestamp();
    DataObj.framesThisSecond = 0;
  }
  DataObj.framesThisSecond++;

  DataObj.dt += getTimestamp() - DataObj.lastFrameTimeMs;
  DataObj.lastFrameTimeMs = getTimestamp();


  let numUpdateSteps = 0;
  while (DataObj.dt >= DataObj.timestep) {
    update(DataObj.timestep);

    DataObj.dt -= DataObj.timestep;

    if (++numUpdateSteps >= 240) {
      panic();
      break;
    }
  }

  render();

  DataObj.frameID = requestAnimationFrame(loop);
}

function update(dt) {
  Controller.update();
}

function render() {
  let ctx = DataObj.ctx;
  ctx.clearRect(0, 0, 940, 540);

  Controller.render(ctx);
}

function panic() {
  DataObj.dt = 0;
}

function getTimestamp() {
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

export const Game = {
  init,
  start,
  stop
}
