import { Movement } from './systems/Movement';
import { CollisionDetection } from './systems/CollisionDetection';
import { AbilityQueueManager } from './systems/AbilityQueueManager';
import { AbilityManager } from './systems/AbilityManager';
import { DeleteFromEntitiesPool } from './systems/DeleteFromEntitiesPool';
import { RenderAppearance } from './systems/RenderAppearance';

export const Entity = {}; // Default entity data is added to the prototype @ game/Entity.js
export const Components = {}; // Components are added to the prototype in @ game/components
export const Systems = {
  Movement,
  CollisionDetection,
  AbilityQueueManager,
  AbilityManager,
  DeleteFromEntitiesPool,
  RenderAppearance
};

export const ECSGlobals = {
  EntitiesPool: [],
  AbilityQueue: new Map()
}
