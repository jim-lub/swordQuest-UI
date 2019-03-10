import {
  Initializers,
  // Entity,
  // Components,
  Systems,
  // Assemblages,
  // Clusters,
  // ECSGlobals
} from './EntityComponentSystem';

import { Assets } from './Assets';

const init = () => {
  return new Promise((resolve, reject) => {
    Initializers.PreloadAssets()
      .then(() => {
        console.log(Assets);
        Initializers.BuildAnimationSequences();
        Initializers.BuildLevel();
        Initializers.InitializeEntities();
      })
      .then(() => {
        Systems.UpdateClusters();
        resolve();
      })
      .catch((e) => {
         console.log(e);
      })
  });
}

const update = () => {
  Systems.DeleteFromEntitiesPool();
  Systems.UpdateClusters();

  Systems.UserInput('user');
  Systems.Physics('user');
  Systems.CollisionDetection('user');
  Systems.Motion('user');

  Systems.EnemyInput('enemies');
  Systems.Physics('enemies');
  Systems.CollisionDetection('enemies');
  Systems.Motion('enemies');

  Systems.AbilityQueueManager();
  Systems.AbilityManager();
  Systems.AttackPointsController();
  Systems.AttackPointCollisionDetection();
  Systems.Physics('abilities');
  Systems.Motion('abilities');

  Systems.Camera();
}

const render = (ctx) => {
  Systems.RenderBackground(ctx);
  Systems.RenderAppearance(ctx);
  Systems.RenderAttackPoints(ctx);
  Systems.RenderHealth(ctx);
}

export const Controller = {
  init,
  update,
  render
}
