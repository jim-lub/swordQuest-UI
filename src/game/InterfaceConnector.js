import { ECSGlobals } from 'game/EntityComponentSystem';

import { getPlayerData } from 'game/utils/player';

import { fireball, frostbolt, heal, swordstrike } from './assemblage/block';

const sendAbilityToQueue = (type) => {
  const { EntitiesPool } = ECSGlobals;
  const { position } = getPlayerData().components.positionVectors;

  if (type === 'magic_fire_fireball') EntitiesPool.push(fireball(position.x, position.y - 100));
  if (type === 'magic_frost_frostbolt') EntitiesPool.push(frostbolt(position.x, position.y - 100));
  if (type === 'magic_restoration_heal') EntitiesPool.push(heal(position.x, position.y - 100));
  if (type === 'melee_warrior_swordstrike') EntitiesPool.push(swordstrike(position.x, position.y - 100));
}

export const InterfaceConnector = {
  sendAbilityToQueue
}
