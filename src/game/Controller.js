import {
  Initializers,
  // Entity,
  // Components,
  Systems,
  // Assemblages,
  // Clusters,
  // ECSGlobals
} from './EntityComponentSystem';

const init = () => {
  return new Promise((resolve, reject) => {
    Initializers.PreloadAssets()
      .then(() => Initializers.BuildAnimationSequences())
      .then(() => {
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
  // console.clear();
  // console.table(Clusters['user'][0].components);

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

  Systems.UpdateAnimations();

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
