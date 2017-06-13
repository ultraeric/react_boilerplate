import * as React from 'react';
import './style.css';
import {staticData} from 'staticResources';
import {Grid, Row, Col} from 'react-bootstrap';
let personalData = staticData.personalData;

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={'footer'}>
        <Grid>
          <Row className={'link-row'}>
            <Col xs={4}><a href={personalData.github}>Github</a></Col>
            <Col xs={4}><a href={personalData.linkedin}>LinkedIn</a></Col>
            <Col xs={4}><a href={personalData.email}>Email</a></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

}

export {Footer};
