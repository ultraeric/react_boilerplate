import {stateTree} from './stateTree';
import {combineReducers} from 'redux';

function reducer(state = stateTree, action) {
  switch(action.type) {
    default:
      return stateTree;
  }
}

reducer = combineReducers();

export {reducer};
