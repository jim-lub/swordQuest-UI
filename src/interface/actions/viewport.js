export const setCurrentViewport = (request) => {
  return {
    type: 'SET_CURRENT_VIEWPORT',
    payload: request
  }
}

export const requestViewportChange = (request) => {
  return {
    type: 'REQUEST_VIEWPORT_CHANGE',
    payload: request
  }
}

export const setActiveComponents = (payload) => {
  return {
    type: 'SET_ACTIVE_COMPONENTS',
    payload: payload
  }
}
