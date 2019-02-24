import React from 'react';
import { DropTarget } from 'react-dnd';
import { useEffect } from 'react';

const AbilityButtonEmpty = (props) => {
  const { connectDropTarget } = props;

  const isDisabled = () => {
    if (props.disabled) return true;
    return false;
  }

  useEffect(() => {
    if (!props.getDropResult) return;

    if (props.getDropResult.abilitySlotIndex === props.index) {
      console.log(props.index, props.getItem.ref_name);
      props.onAbilitySwitch(props.index, props.getItem.ref_name);
    }
  }, [props.getDropResult]);

  const divStyle = (props.isOver && props.canDrop) ? {borderColor: '#a7e25a'} : {};

  return connectDropTarget(
    <button
      className="actionbar__abilityslot-container"
      disabled={isDisabled()}
      style={divStyle}
    >
      <div className="actionbar__abilityslot-textnode--ctrl">{props.ctrl}</div>
      <img src={require('assets/ui/icons/empty-ability-slot-2.png')} alt="empty" />
    </button>
  )
}

const dropTarget = {
  drop(props) {
    return {
      abilitySlotIndex: props.index
    }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    getItem: monitor.getItem(),
    getDropResult: monitor.getDropResult()
  }
}

export default DropTarget('ABILITY', dropTarget, collect)(AbilityButtonEmpty);
