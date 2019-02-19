import { Movement } from './systems/Movement';
import { CollisionDetection } from './systems/CollisionDetection';
import { AbilityQueueManager } from './systems/AbilityQueueManager';
import { DeleteFromEntitiesPool } from './systems/DeleteFromEntitiesPool';

export const Entity = {}; // Default entity data is added to the prototype @ game/Entity.js
export const Components = {}; // Components are added to the prototype in @ game/components
export const Systems = {
  Movement,
  CollisionDetection,
  AbilityQueueManager,
  DeleteFromEntitiesPool
};

export const ECSGlobals = {
  EntitiesPool: [],
  AbilityQueue: new Map()
}
