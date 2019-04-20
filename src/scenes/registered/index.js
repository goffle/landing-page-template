import React from "react";
import { Link } from 'react-router-dom'

import "./index.less";

export default class registered extends React.Component {
  render() {
    return (
      <div className="registered">
        <div className="container">
          Thanks for you registration
          <p>We are coming back to you soon with the registration process</p>
          <Link to="/">BACK</Link>
        </div>
      </div>
    );
  }
}
