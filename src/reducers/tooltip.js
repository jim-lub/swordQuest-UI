const tooltip = (state = {}, action) => {
  switch (action.type) {
    case 'TOOLTIP_UPDATE':
      return {
        title: action.title,
        description: action.description,
        data: action.data
      }
    default:
      return state
  }
}

export default tooltip
