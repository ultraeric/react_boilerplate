import {stateTree} from './stateTree';
import {combineReducers} from 'redux';
import {reducer as mainMenuReducer} from 'MainMenu';
import {reducer as footerReducer} from 'Footer';
import {reducer as headerReducer} from 'Header';

function reducer(state = stateTree, action) {
  switch(action.type) {
    default:
      return state;
  }
};

reducer = combineReducers(
  {
    headerData: headerReducer,
    mainMenuData: mainMenuReducer,
    footerData: footerReducer
  }
)


export {reducer};
