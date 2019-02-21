import { Components } from 'game/EntityComponentSystem';

/********************************************************************************
* @ userInput
* -------------------------------------------------------------------------------
* @
********************************************************************************/
Components.userInput = ({activeKeys}) => ({
  userInput: Object.assign({}, {
    activeKeys: activeKeys
  })
});
