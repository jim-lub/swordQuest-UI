import { Components } from 'game/EntityComponentSystem';

Components.Position = function ComponentPosition (vector) {
  this.posx = vector.x;
  this.posy = vector.y;

  this.velx = 0;
  this.vely = 0;

  this.accx = 0;
  this.accy = 0;

  return this;
}
Components.Position.prototype.name = 'position';
