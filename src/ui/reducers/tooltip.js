export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_TOOLTIP_INFORMATION':
      return {
        title: action.payload.title,
        description: action.payload.description,
        data: action.payload.data
      }
    default:
      return state;
  }
}
