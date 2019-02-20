import { Components } from 'game/EntityComponentSystem';
import { Vector } from 'game/lib/Vector';

Components.Position = function(x, y) {
  this.position = new Vector(x, y);
  this.velocity = new Vector(0, 0);
  this.acceleration = new Vector(0, 0);
  this.direction = 1;

  return this;
}

Components.Position.prototype.name = 'positionVectors';
