import React, { Component } from 'react';
import Header from './Header';
import Greeting from './Greeting';
import CheckMeOut from './CheckMeOut';
import Technologies from './Technologies';
import Services from './Services';

export default class Page extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="page-Div">
          <Greeting />
          <CheckMeOut />
        </div>
        <div className="page-Div black-Background">
          <Technologies />
          <Services />
        </div>
        <div className="page-Div">

        </div>
      </div>
     );
  }
}