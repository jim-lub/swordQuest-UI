import React from 'react';
import { DragSource } from 'react-dnd';

import { Abilities } from 'config/abilities';

const AbilityNode = ({connectDragSource, isDragging, ref_name}) => {
  const refTo = Abilities.refNameToComponents(ref_name);
  const currentAbility = Abilities[refTo.combatType][refTo.className][refTo.abilityName];

  return connectDragSource(
    <div className="abilitiespanel__ability-node--container" style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'move'
    }}>
      <div className="abilitiespanel__ability-node--icon">
        <img src={currentAbility.icon} alt={currentAbility.ref_name} />
      </div>
      <div className="abilitiespanel__ability-node--subcontainer">
        <div className="abilitiespanel__ability-node--name">
          {currentAbility.display_name}
        </div>
        <div className={`abilitiespanel__ability-node--class CLRS__class-${refTo.className}--color`}>
          {refTo.className}
        </div>
      </div>
    </div>
  )
}

const dragSource = {
  beginDrag(props) {
    return {
      ref_name: props.ref_name
    };
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export default DragSource('ABILITY', dragSource, collect)(AbilityNode);
