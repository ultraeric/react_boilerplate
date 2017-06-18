import * as React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import {staticData} from 'staticResources';
import {bindActionCreators} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import {HomePage} from 'HomePage';

class Pages extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'pages'}>
        <Route exact path={'/'} component={HomePage}>
        </Route>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {

  };
}

Pages = withRouter(connect(mapStateToProps, mapDispatchToProps)(Pages));

export {Pages};
