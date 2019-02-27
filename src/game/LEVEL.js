import {
  // Entity,
  // Components,
  // Systems,
  Assemblages,
  // Clusters,
  ECSGlobals
} from './EntityComponentSystem';

export const BUILD_LEVEL = () => {
  const { EntitiesPool } = ECSGlobals;

  const level = [
    ...[Assemblages.block({x: 470, y: 490, width: 3500, height: 30, opacity: 0.1, color: 'black'})], // floor
    ...[Assemblages.block({x: -520, y: 270, width: 50, height: 540, opacity: 0.5, color: 'black'})], // left wall
    ...[Assemblages.block({x: 2100, y: 270, width: 10, height: 540, opacity: 0.1, color: 'black'})], // right wall

    ...[Assemblages.block({x: 100, y: 470, width: 300, height: 15, opacity: 0.5, color: 'black'})],
    ...[Assemblages.block({x: 100, y: 455, width: 200, height: 15, opacity: 0.5, color: 'black'})],
    ...[Assemblages.block({x: 100, y: 440, width: 100, height: 15, opacity: 0.5, color: 'black'})],

    ...[Assemblages.block({x: -350, y: 465, width: 300, height: 25, opacity: 0.5, color: 'black'})],
    ...[Assemblages.block({x: -400, y: 440, width: 200, height: 25, opacity: 0.5, color: 'black'})],
    ...[Assemblages.block({x: -450, y: 415, width: 100, height: 25, opacity: 0.5, color: 'black'})],
  ];

  EntitiesPool.push(...level);
}
