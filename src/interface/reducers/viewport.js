export default (state = {current: 'play', request: null}, action) => {
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
    default:
      return state
  }
}
