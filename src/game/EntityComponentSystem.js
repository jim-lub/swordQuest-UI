import { UserInput } from './systems/UserInput';
import { EnemyInput } from './systems/EnemyInput';
import { CollisionDetection } from './systems/CollisionDetection';
import { Motion } from './systems/Motion';
import { Camera } from './systems/Camera';
import { UpdateClusters } from './systems/UpdateClusters';

import { RenderAppearance } from './systems/RenderAppearance';

import { AbilityQueueManager } from './systems/AbilityQueueManager';
import { AbilityManager } from './systems/AbilityManager';
import { DeleteFromEntitiesPool } from './systems/DeleteFromEntitiesPool';


export const Entity = {}; // Default entity data is added to the prototype @ game/Entity.js
export const Components = {}; // Components are added to the prototype in @ game/components
export const Systems = {
  UserInput,
  EnemyInput,
  CollisionDetection,
  Motion,
  Camera,
  UpdateClusters,

  RenderAppearance,

  AbilityQueueManager,
  AbilityManager,
  DeleteFromEntitiesPool,
};
export const Clusters = {};

export const ECSGlobals = {
  EntitiesPool: [],
  AbilityQueue: new Map()
};
