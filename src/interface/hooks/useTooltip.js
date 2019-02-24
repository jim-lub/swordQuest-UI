import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setTooltipInformation } from 'interface/actions';

import { Utils } from 'interface/utils';

const TooltipEmitter = (props) => {
  const handleMouseOver = () => {
    props.actions.setTooltipInformation({
      informationType: "ability-information",
      data: props.ref_name
    });
  }

  const handleMouseOut = () => {
    props.actions.setTooltipInformation({
      informationType: undefined,
      data: {}
    });
  }

  useEffect(() => {
    Utils.Dom.newListener().mouseover(props.id, handleMouseOver);
    return () => Utils.Dom.removeListener().mouseover(props.id, handleMouseOver)
  });

  useEffect(() => {
    Utils.Dom.newListener().mouseout(props.id, handleMouseOut);
    return () => Utils.Dom.removeListener().mouseout(props.id, handleMouseOut)
  });


  return null;
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({setTooltipInformation}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TooltipEmitter);
