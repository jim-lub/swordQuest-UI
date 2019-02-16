import React from 'react';

import { connect } from 'react-redux';

import { HealthBar, EnergyBar, ManaBar } from './';

const PlayerPane = () => {
  const data = {
    health: 1300,
    maxHealth: 1500,
    energy: 200,
    maxEnergy: 250,
    mana: 65,
    maxMana: 100
  }

  const healthPercentage = currentToPercentage(data.health, data.maxHealth);
  const energyPercentage = currentToPercentage(data.energy, data.maxEnergy);
  const manaPercentage = currentToPercentage(data.mana, data.maxMana);

  return (
    <div className="playerpane__wrapper">
      <div className="playerpane__container">
        <HealthBar percentage={healthPercentage} />
        <EnergyBar percentage={energyPercentage} />
        <ManaBar percentage={manaPercentage} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const currentToPercentage = (current, max) => {
  return (current / max) * 100;
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPane);
