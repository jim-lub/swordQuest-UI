import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ECSGlobals } from 'game/EntityComponentSystem';

import { updateStoreGameState } from 'interface/actions';

const GameStateController = (props) => {
  const { EntitiesPool, AbilityQueue } = ECSGlobals;

  useEffect(() => {
      if(props.canvas.isPlaying) {
        const intervalID = setInterval(() => {
          props.actions.updateStoreGameState({
            Entities: EntitiesPool,
            AbilityQueue: [...AbilityQueue.values()].map(ability => ability)
          });
        }, 1000);
        return () => {
          clearInterval(intervalID)
        }
      }
  }, [props.canvas.isPlaying])

  return null;
};

const mapStateToProps = state => {
  return {
    viewport: state.viewport,
    canvas: state.canvas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({updateStoreGameState}, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameStateController);
