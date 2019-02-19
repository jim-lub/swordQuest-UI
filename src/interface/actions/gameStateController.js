
export const updateStoreGameState = (payload) => {
  return {
    type: 'UPDATE_STORE_GAME_STATE',
    payload: {
      ...payload
    }
  }
}
