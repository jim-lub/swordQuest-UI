import { ECSGlobals } from 'game/EntityComponentSystem';

// import { fireball, frostbolt, heal, swordstrike } from './assemblage/block';

const sendAbilityToQueue = (type) => {
  const { EntitiesPool } = ECSGlobals;

  // if (type === 'magic_fire_fireball') EntitiesPool.push(fireball());
  // if (type === 'magic_frost_frostbolt') EntitiesPool.push(frostbolt());
  // if (type === 'magic_restoration_heald') EntitiesPool.push(heal());
  // if (type === 'melee_warrior_swordstrike') EntitiesPool.push(swordstrike());
}

export const InterfaceConnector = {
  sendAbilityToQueue
}
