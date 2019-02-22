export const create = () => {
  const state = {
    id: randomId(),
    delete: false,
    addComponent: (component) => addComponent(state, component),
    removeComponent: (componentName) => removeComponent(state, componentName),
    components: {}
  }

  return Object.assign(state, {});
}

const addComponent = (state, component) => {
  Object.assign(state.components, component);
};

const removeComponent = (state, componentName) => {
  if (!state.components[componentName]) return;

  delete state.components[componentName];
};

const randomId = () => {
  return (+new Date()).toString(16) +
            (Math.random() * 100000000 | 0).toString(16);
}
