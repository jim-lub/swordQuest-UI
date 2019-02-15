export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLAYER_CONTROLS':
      return {
        ...state,
        actionbar: action.payload
      }
    default:
      return state
  }
}
