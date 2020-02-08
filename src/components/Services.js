import React, { Component } from 'react';
import Technology from './Technology';
import github_logo from '../github_logo.png';
import heroku_logo from '../heroku_logo.png';
import netlify_logo from '../netlify_logo.png';

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="technologies-Text-Container">
          <h2 className="technologies-Header-Text">
            And some services:
          </h2>
        </div>
        
        <div className="services-Container-Parent">
          <div className="services-Container">
            <Technology src={github_logo} alt={'github logo'} text={'GitHub'} />
            <Technology src={heroku_logo} alt={'heroku logo'} text={'Heroku'} />
            <Technology src={netlify_logo} alt={'netlify logo'} text={'Netlify'} />
          </div>
        </div>
      </div>
     );
  }
}
