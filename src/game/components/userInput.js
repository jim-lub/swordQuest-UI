import { Components } from 'game/EntityComponentSystem';

/********************************************************************************
* @ userInput
* -------------------------------------------------------------------------------
* @
********************************************************************************/
Components.userInput = function({activeKeys}) {
  this.activeKeys = activeKeys;

  return this;
}
Components.userInput.prototype.name = 'userInput';
