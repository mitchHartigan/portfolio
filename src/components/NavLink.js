import React, {Component} from 'react';

export default class NavLink extends Component {
  render() { 
    return ( 
      <div>
        <button
          className="navLink"
          onClick={this.props.handleScroll}
          >
            {this.props.linkText}
        </button>
      </div>
     );
  }
}
