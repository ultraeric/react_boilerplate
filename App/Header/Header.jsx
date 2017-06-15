import * as React from 'react';
import './style.scss';
import {staticData} from 'staticResources';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
let personalData = staticData.personalData;


class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={'header'}>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

}

export {Header};
