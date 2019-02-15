export default (state = {}, action) => {
  switch (action.type) {
    case 'TOOLTIP_UPDATE':
      return {
        title: action.payload.title,
        description: action.payload.description,
        data: action.payload.data
      }
    case 'TOOLTIP_CLEAR':
      return {
        title: null,
        description: null,
        data: null
      }
    default:
      return state;
  }
}
