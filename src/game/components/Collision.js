import { Components } from 'game/EntityComponentSystem';

Components.Collision = function(width, height, collisionPointsMultiplier = 1) {
  this.hitbox = {
    width,
    height
  }
  this.collisionPoints = 4 * collisionPointsMultiplier;
  this.hasCollisionOnAxis = {
    x: false,
    y: false
  }

  return this;
}

Components.Collision.prototype.name = 'collisionDetection';
