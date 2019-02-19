import { Entity } from './EntityComponentSystem';

Entity.Instance = function Entity() {
  this.id = (+new Date()).toString(16) +
            (Math.random() * 100000000 | 0).toString(16) +
            Entity.Instance.prototype._count;

  Entity.Instance.prototype._count++;

  this.components = {};

  return this;
}

Entity.Instance.prototype._count = 0;

Entity.Instance.prototype.addComponent = function addComponent (component) {
  this.components[component.name] = component;

  return this;
}

Entity.Instance.prototype.removeComponent = function removeComponent (componentName) {
  let name = componentName;

  if (typeof componentName === 'function') {
    name = componentName.prototype.name;
  }

  delete this.components[name];
  return this;
}

Entity.Instance.prototype.print = function print () {
  console.log(JSON.stringify(this, null, 4));
  return this;
}
