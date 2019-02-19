export default (state = {
  Entities: [],
  AbilityQueue: []
}, action) => {
  switch (action.type) {
    case 'UPDATE_STORE_GAME_STATE':
      return {
        ...action.payload
      }
    default:
      return {
        ...state
      }
  }
}
