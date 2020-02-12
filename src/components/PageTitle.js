import React, {Component} from 'react';

export default class PageTitle extends Component {
  render() {
    return ( 
      <div>
        <h1 className={this.props.textStyle}>{this.props.children}</h1>
      </div>
     );
  }
}