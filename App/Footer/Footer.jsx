import * as React from 'react';
import './style.css';
import {staticData} from 'staticResources';
let personalData = staticData.personalData;

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={'footer'}>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

}

export {Footer};
