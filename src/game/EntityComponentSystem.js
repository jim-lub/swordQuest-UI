import { UserInput } from './systems/UserInput';
import { CollisionDetection } from './systems/CollisionDetection';
import { Motion } from './systems/Motion';

import { RenderAppearance } from './systems/RenderAppearance';

import { AbilityQueueManager } from './systems/AbilityQueueManager';
import { AbilityManager } from './systems/AbilityManager';
import { DeleteFromEntitiesPool } from './systems/DeleteFromEntitiesPool';


export const Entity = {}; // Default entity data is added to the prototype @ game/Entity.js
export const Components = {}; // Components are added to the prototype in @ game/components
export const Systems = {
  UserInput,
  CollisionDetection,
  Motion,

  RenderAppearance,

  AbilityQueueManager,
  AbilityManager,
  DeleteFromEntitiesPool,
};

export const ECSGlobals = {
  EntitiesPool: [],
  AbilityQueue: new Map()
};
