export const updateTooltip = ({title, description, data}) => {
  return {
    type: 'TOOLTIP_UPDATE',
    payload: {
      title,
      description,
      data: {
        ...data
      }
    }
  }
};

export const clearTooltip = () => {
  return {
    type: 'TOOLTIP_CLEAR',
    payload: {}
  }
};
