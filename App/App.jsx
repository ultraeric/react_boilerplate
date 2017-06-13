import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import io from 'socket.io-client';

import {staticData} from 'staticResources';

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
      <div className={'app-root'}>
        <h1>Hi</h1>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app')
);
