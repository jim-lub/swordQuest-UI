import React from 'react';

import { connect } from 'react-redux';

import { MenuItem } from './';

const Menubar = () => {
  const menuItems = ['abilities', 'inventory', 'map', 'quests', 'settings', 'achievements'];
  return (
    <div className="UI-menubar-container">
      {menuItems.map((cur, index) => {
        return <MenuItem key={index} icon={cur} />
      })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);
