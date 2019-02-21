import { ECSGlobals } from 'game/EntityComponentSystem';

export const getPlayerData = () => {
  const { EntitiesPool } = ECSGlobals;

  return EntitiesPool.filter(entity => entity.components.hasOwnProperty("userInput"))[0];
}
