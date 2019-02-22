import * as EntityConstructor from 'game/lib/Entity';

import * as AllComponents from 'game/components';
import * as AllSystems from 'game/systems';
import * as AllAssemblages from 'game/assemblages';

export const Entity = EntityConstructor;
export const Components = AllComponents;
export const Systems = AllSystems;
export const Assemblages = AllAssemblages;
export const Clusters = {};

export const ECSGlobals = {
  EntitiesPool: [],
  AbilityQueue: new Map()
};
