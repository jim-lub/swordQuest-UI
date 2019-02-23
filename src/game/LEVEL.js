import {
  // Entity,
  // Components,
  Systems,
  Assemblages,
  Clusters,
  ECSGlobals
} from './EntityComponentSystem';

export const BUILD_LEVEL = () => {
  const { EntitiesPool } = ECSGlobals;

  const level = [
    ...[Assemblages.block({x: 0, y: 490, width: 3000, height: 30, opacity: 0.1, color: 'black'})],
    ...[Assemblages.block({x: -1470, y: 270, width: 10, height: 540, opacity: 0.1, color: 'black'})],
    ...[Assemblages.block({x: 0, y: 490, width: 10, height: 30, opacity: 0.1, color: 'black'})],


    ...[Assemblages.block({x: 100, y: 470, width: 30, height: 30, opacity: 0.5, color: 'black'})],
    ...[Assemblages.block({x: 70, y: 450, width: 30, height: 30, opacity: 0.5, color: 'black'})],
    ...[Assemblages.block({x: 40, y: 430, width: 30, height: 30, opacity: 0.5, color: 'black'})],
  ];

  EntitiesPool.push(...level);
}
