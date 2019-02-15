export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIONBAR_ABILITIES':
      return {
        ...state,
        abilities: action.payload
      }
    default:
      return state
  }
}
