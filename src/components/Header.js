import React, {Component} from 'react';
import NavLink from './NavLink';

class Header extends Component {

  render() { 
    return (
      <div className="header-Container">
        <div>
          <NavLink linkStyle={'mitchHartigan-Header-Text'} linkText={'MH'} scrollTarget={'top'} />
        </div>
        
          <div className="navLink-Parent">
            <NavLink linkStyle={'navLink'} linkText={'Contact'} scrollTarget={'contact'} />
            <NavLink linkStyle={'navLink'} linkText={'My Work'} scrollTarget={'my-work'}/>
            <NavLink linkStyle={'navLink'} linkText={'Experience'} scrollTarget={'my-experience'} />
          </div>
        </div>
     );
  }
}
 
export default Header;