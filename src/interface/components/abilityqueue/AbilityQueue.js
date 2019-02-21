import React from 'react';

import { connect } from 'react-redux';

import { Abilities } from 'config/abilities';

const AbilityQueue = (props) => {
  console.clear();
  console.log(props.abilityQueue);
  const queue = props.abilityQueue
    .map((ability, index) => {
      const [combatType, className, abilityName] = ability.split("_");
      const currentAbility = Abilities[combatType][className][abilityName];

      return (
        <div key={index} className=".abilityqueue__ability-container">
          <img src={currentAbility.icon} alt={currentAbility.ref_name} className="abilityqueue__image-resize" />
        </div>)
  })

  return (
    <div className="abilityqueue__wrapper">
      <div className="abilityqueue__container">

        <div className="abilityqueue__queue-container">
        {queue}
        </div>

        <div className="abilityqueue__icon-container">
          <img src={require(`assets/ui/icons/abilityqueue.png`)} alt="" className="abilityqueue__image-resize2" />
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    abilityQueue: state.gameState.AbilityQueue
  };
};

export default connect(mapStateToProps)(AbilityQueue);
