import React, { Component } from "react";
import downArrow from "../downArrow.svg";

export default class CheckMeOut extends Component {
  render() {
    return (
      <div className="checkMeOut-Container">
        <p className="checkMeOut-Text">
          <i>Check out some of my work</i>
        </p>
        <img
          alt="chevron down by Bradley Wilton from the Noun Project"
          src={downArrow}
          width="60"
          height="50"
        />
      </div>
    );
  }
}
