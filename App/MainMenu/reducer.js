import {stateTree} from './stateTree';

function reducer(state = stateTree, action) {
  switch(action.type) {
    case 'menuToggled': {
      return {...state, active: !state.active};
    }
    default:
      return stateTree;
  }
};

export {reducer};
