export default (state = [], action) => {
  switch (action.type) {
    case 'TOOLTIP_UPDATE':
      return [
        ...state, action.payload.title
      ]
    default:
      return state;
  }
}
