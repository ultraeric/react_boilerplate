import * as React from 'react';
import {render} from 'react-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Drawer} from 'react-toolbox/lib/drawer';
import * as actionCreators from './actionCreators';

class MainMenu extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div>
        <Drawer active={this.props.active} onOverlayClick={this.props.onOverlayClick}>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    active: state.mainMenuData.active
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onOverlayClick: bindActionCreators(actionCreators.toggleMenu, dispatch)
  };
}

MainMenu = connect(mapStateToProps, mapDispatchToProps)(MainMenu);

export {MainMenu};
