export const setTooltipInformation = ({ informationType, data }) => {
  return {
    type: 'SET_TOOLTIP_INFORMATION',
    payload: {
      informationType,
      data: {
        ...data
      }
    }
  }
};
