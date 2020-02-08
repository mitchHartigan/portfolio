import React, {Component} from 'react';
import NavLink from './NavLink';

class Header extends Component {

  render() { 
    return (
      <div className="header-Container">

        <div>
          <h1 className="mitchHartigan-Header-Text">Mitch.Hartigan</h1>
        </div>

          <div className="navLink-Parent">
            <NavLink linkText={'Contact'} />
            <NavLink linkText={'My Work'} />
            <NavLink linkText={'Experience'} />
          </div>
        </div>
     );
  }
}
 
export default Header;