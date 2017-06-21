import * as React from 'react';
import './style.scss';
import {personalData} from 'data';

import Link from 'react-toolbox/lib/link/Link';
import Navigation from 'react-toolbox/lib/navigation/Navigation'

import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import MdMail from 'react-icons/lib/md/mail';

class Footer extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'footer'}>
        <div className={'icon-links'}>
          <Link className={'important-link'}
            href={personalData.github}
            label={''}
            icon={<FaGithubSquare size={'2em'}/>}/>
          <Link className={'important-link'}
            href={personalData.linkedin}
            label={''}
            icon={<FaLinkedin size={'2em'}/>}/>
          <Link className={'important-link'}
            href={'mailto:' + personalData.email}
            label={''}
            icon={<MdMail size={'2em'}/>}/>
        </div>
        <h4>Eric Hou 2017</h4>
        <h6>{personalData.phone}&emsp;|&emsp;<a href={personalData.website}>website</a></h6>
    </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

}

export {Footer};
