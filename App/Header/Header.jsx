import * as React from 'react';
import './style.scss';
import {staticData} from 'staticResources';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import {withRouter} from 'react-router';

import MdMenu from 'react-icons/lib/md/menu';
import MdHome from 'react-icons/lib/md/home';

import {actionCreators as mainMenuActionCreators} from 'MainMenu';

let personalData = staticData.personalData;


class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={'header'}>
        <AppBar title={'Eric Hou'}
          leftIcon={<MdMenu/>} rightIcon={<MdHome/>}
          onLeftIconClick={this.props.onLeftIconClick}
          onRightIconClick={() => this.props.history.push('/')}>
        </AppBar>
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
    onLeftIconClick: bindActionCreators(mainMenuActionCreators.toggleMenu, dispatch),
  };
}

Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

export {Header};
