export default (state = {
  abilities: undefined,
  enabled: true
}, action) => {
  switch (action.type) {
    case 'SET_ACTIONBAR_ABILITIES':
      return {
        ...state,
        abilities: action.payload
      }
    case 'DISABLE_ACTION_BAR':
      return {
        ...state,
        enabled: false
      }
      case 'ENABLE_ACTION_BAR':
        return {
          ...state,
          enabled: true
        }
    default:
      return state
  }
}
