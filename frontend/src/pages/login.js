import React from 'react';
import { Redirect } from 'react-router-dom';
import { SessionController as LoginController } from '../networking/SessionController';
import { InputField } from '../common/inputField';
import { PreLoginForm } from '../common/preLoginForm';
import '../assets/preLogin.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', password: '', redirect: '', warning: null,
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleUserChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  async handleSignIn(event) {
    event.preventDefault();
    const { username, password } = this.state;
    const { success, message } = await LoginController.login(username, password);
    if (success) {
      this.setState({ redirect: '/home' });
    } else {
      this.setState({ warning: <div className="prelogin-error-text">{message}</div> });
    }
  }

  render() {
    let res = null;
    if (this.state.redirect) {
      res = <Redirect to={this.state.redirect} />;
    } else {
      res = (
        <div className="login-page">
          <PreLoginForm handleSubmit={this.handleSignIn} buttonText="Log in">
            <InputField title="Username" type="text" currentText={this.state.username} handleTextChange={this.handleUserChange} />
            <InputField title="Password" type="password" currentText={this.state.password} handleTextChange={this.handlePasswordChange} />
          </PreLoginForm>
          { this.state.warning }
        </div>
      );
    }
    return res;
  }
}

function LoginView() {
  return (
    <div className="prelogin-background-view">
      <h1>thomaszon</h1>
      <LoginForm />
    </div>
  );
}


export { LoginView };
