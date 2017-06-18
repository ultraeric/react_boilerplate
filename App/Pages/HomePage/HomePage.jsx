import * as React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import {staticData} from 'staticResources';
import {bindActionCreators} from 'redux';
import {Row, Col} from 'react-flexbox-grid';

class HomePage extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'home-page'}>
        <div className={'page-header'}>
          <h1>Home</h1>
        </div>
        <div className={'page-content'}>
          <Row>
          </Row>
        </div>
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

HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export {HomePage};
