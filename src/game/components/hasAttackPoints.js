export const hasAttackPoints = ({patterns}) => ({
  attackPoints: Object.assign({}, {
    patterns,
    attackPointsPool: []
  })
});
