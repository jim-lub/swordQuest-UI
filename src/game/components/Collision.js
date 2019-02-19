import { Components } from 'game/EntityComponentSystem';

Components.Collision = function(width, height, type, collisionPointsMultiplier = 1) {
  this.hitbox = {
    width,
    height
  }
  this.type = type;
  this.collisionPoints = 4 * collisionPointsMultiplier;
  this.hasCollisionOnAxis = {
    x: false,
    y: false
  }

  return this;
}

Components.Collision.prototype.name = 'collisionDetection';
