import React, { Component } from "react";
import PageTitle from "./PageTitle";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <PageTitle textStyle="contact-Header-Text">Contact Me</PageTitle>
        <h2 className="contact-Sub-Text">949 449 5453</h2>
        <h2 className="contact-Sub-Text">mitch.hartigan@gmail.com</h2>
        <h2 className="contact-Sub-Text">
          <a
            className="contact-Link"
            href="https://github.com/mitchHartigan"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/mitchHartigan
          </a>
        </h2>
        <h2 className="contact-Sub-Text">
          <a
            className="contact-Link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/mitchell-hartigan-388323189/"
          >
            linkedin.com/in/mitchell-hartigan/
          </a>
        </h2>
      </div>
    );
  }
}
