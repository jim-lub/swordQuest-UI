import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MenuItem } from './';

import { requestViewportChange } from 'interface/actions';

const Menubar = (props) => {
  const menuItems = ['abilities', 'inventory', 'map', 'quests', 'settings', 'achievements'];
  return (
    <div className="UI-menubar-container">
      {menuItems.map((cur, index) => {
        return <MenuItem key={index} index={index} icon={cur} requestViewportChange={props.actions.requestViewportChange} />
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
    actions: bindActionCreators({requestViewportChange}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);
