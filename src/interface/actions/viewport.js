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
