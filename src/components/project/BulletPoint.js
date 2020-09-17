import React, { Component } from "react";

export default class BulletPoint extends Component {
  render() {
    return (
      <div>
        <ul>
          <li
            style={{
              color: "#EBEBEB",
            }}
          >
            {this.props.text}
          </li>
        </ul>
      </div>
    );
  }
}
