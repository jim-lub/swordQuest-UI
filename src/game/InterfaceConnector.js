import { ECSGlobals } from 'game/EntityComponentSystem';

const sendAbilityToQueue = (type) => {
  const { AbilityQueue } = ECSGlobals;

  AbilityQueue.set(randomId(), type);
}

export const InterfaceConnector = {
  sendAbilityToQueue
}

const randomId = () => {
  return (+new Date()).toString(16) +
            (Math.random() * 100000000 | 0).toString(16);
}
