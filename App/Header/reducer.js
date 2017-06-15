import {stateTree} from './stateTree';

function reducer(state = stateTree, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export {reducer};
