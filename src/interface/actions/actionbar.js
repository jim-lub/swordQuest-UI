export const setActionbarAbilities = (abilitiesMap) => {
  return {
    type: 'SET_ACTIONBAR_ABILITIES',
    payload: abilitiesMap

  }
}

export const disableActionbar = () => {
  return {
    type: 'DISABLE_ACTION_BAR',
    payload: {}
  }
}

export const enableActionbar = () => {
  return {
    type: 'ENABLE_ACTION_BAR',
    payload: {}
  }
}
