import * as React from 'react';
import './style.scss';
import {staticData} from 'staticResources';
import Link from 'react-toolbox/lib/link/Link';
import Navigation from 'react-toolbox/lib/navigation/Navigation'
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import MdMail from 'react-icons/lib/md/mail';
let personalData = staticData.personalData;

class Footer extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'footer'}>
        <div className={'icon-links'}>
          <Link className={'important-link'} href={personalData.github} label={''} icon={<FaGithubSquare size={48}/>}/>
          <Link className={'important-link'} href={personalData.linkedin} label={''} icon={<FaLinkedin size={48}/>}/>
          <Link className={'important-link'} href={'mailto:' + personalData.email} label={''} icon={<MdMail size={48}/>}/>
        </div>
        <h3>Eric Hou 2017</h3>
        <h5>{personalData.phone}&emsp;|&emsp;<a href={personalData.website}>website</a></h5>
    </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

}

export {Footer};
