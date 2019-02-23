const init = {
  actionbar: true,
  abilitiesPanel: false
}

export default (state = {current: 'play', request: null, components: init}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_VIEWPORT':
      return {
        ...state,
        current: action.payload
      }
    case 'REQUEST_VIEWPORT_CHANGE':
      return {
        ...state,
        request: action.payload
      }
    case 'SET_ACTIVE_COMPONENTS':
      return {
        ...state,
        components: action.payload
      }
    default:
      return state
  }
}
