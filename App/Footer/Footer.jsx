import * as React from 'react';
import * as colors from 'material-ui/styles/colors';
import Grid from 'material-ui/Grid';
import './style.css';
import {staticData} from 'staticResources';
let personalData = staticData.personalData;

class Footer extends React.Component {
  constructor() {
    super();
    store.subscribe((state) => {
    });
  }

  render() {
    return (
      <div className={'footer'} style={{backgroundColor: colors.grey[700]}}>
        <Grid className={'personalDataGrid'} container gutter={0}>
          <Grid className={'personalDataItem'} item xs={4}>
            <a href={staticData.personalData.github}>Github</a>
          </Grid>
          <Grid className={'personalDataItem'} item xs={4}>
            <a href={staticData.personalData.linkedin}>LinkedIn</a>
          </Grid>
          <Grid className={'personalDataItem'} item xs={4}>
            <a href={staticData.personalData.email}>Email</a>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

}

export {Footer};
