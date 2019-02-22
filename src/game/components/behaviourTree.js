import { Components } from 'game/EntityComponentSystem';

/********************************************************************************
* @ behaviourTree
* -------------------------------------------------------------------------------
* @
********************************************************************************/
Components.behaviourTree = () => ({
  behaviourTree: Object.assign({}, {
    tree: []
  })
});

// 
// Sequence
// Selector
// Leaf
// Inverter
// Succes/Failure/Running
