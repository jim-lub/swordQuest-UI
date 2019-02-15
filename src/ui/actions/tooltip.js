export const setTooltipInformation = ({title, description, data}) => {
  return {
    type: 'SET_TOOLTIP_INFORMATION',
    payload: {
      title,
      description,
      data: {
        ...data
      }
    }
  }
};
