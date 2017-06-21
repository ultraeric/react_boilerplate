import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import io from 'socket.io-client';

import {reducer} from './reducer';

import './style.scss'
import {Footer} from 'Footer';
import {MainMenu} from 'MainMenu';
import {Header} from 'Header';
import {Pages} from 'Pages';

let store = createStore(reducer);

class App extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'app-root'}>
        <div className={'spacewrapper'}>
          <Header/>
          <MainMenu/>
          <Pages/>
          <div className={'pseudofooter'}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

setTimeout(()=>
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path={'/'}>
        <App/>
      </Route>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')
)
, 0);
