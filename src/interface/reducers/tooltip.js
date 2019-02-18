export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_TOOLTIP_INFORMATION':
      return {
        informationType: action.payload.informationType,
        data: action.payload.data
      }
    default:
      return state;
  }
}
