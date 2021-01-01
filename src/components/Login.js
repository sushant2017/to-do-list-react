import { render } from "@testing-library/react";
import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input value={this.props.username} />
        <input value={this.props.password} type="password" />
      </div>
    );
  }
}
export default Login;
