import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import io from 'socket.io-client';

//Needed for Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {reducer} from './reducer';
import {Footer} from 'Footer';
import './style.css'


let store = createStore(reducer);

class App extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className={'app-root'}>
          <h1>Hi</h1>
          <p>{store.getState().staticData.personalData.email}</p>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app')
);
