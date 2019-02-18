export default (state = {isPlaying: true}, action) => {
  switch (action.type) {
    case 'CANVAS_START_GAME_LOOP':
      return {
        ...state,
        isPlaying: true
      }
    case 'CANVAS_PAUSE_GAME_LOOP':
      return {
        ...state,
        isPlaying: false
      }
    default:
      return {
        ...state
      }
  }
}
