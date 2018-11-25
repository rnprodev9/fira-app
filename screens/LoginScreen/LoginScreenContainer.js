import React from "react";
import LoginScreenPresenter from "./LoginScreenPresenter";

class LoginScreenContainer extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onInputChange = (text, name) => {
    this.setState({
      [name]: text
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginScreenPresenter
        email={email}
        password={password}
        onInputChange={this.onInputChange}
      />
    );
  }
}

export default LoginScreenContainer;
