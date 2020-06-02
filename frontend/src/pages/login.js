import React from 'react';
import { Redirect } from 'react-router-dom';
import { HttpService } from '../networking/HttpRequest';
import '../assets/login.css';

const httpService = new HttpService();

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
    const { success, message } = await httpService.post('login', { username, password });
    if (success) {
      this.setState({ redirect: '/home' });
    } else {
      this.setState({ warning: <div className="login-error-text">{message}</div> });
    }
  }

  render() {
    let res = null;
    if (this.state.redirect) {
      res = <Redirect to={this.state.redirect} />;
    } else {
      res = (
        <div className="login-page">
          <form className="login-form" onSubmit={this.handleSignIn}>
            <div className="login-field-user">
              <label htmlFor="username">Username:</label>
              <input type="text" value={this.state.username} onChange={this.handleUserChange} />
            </div>
            <div className="login-field-password">
              <label htmlFor="password">Password:</label>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <button className="login-signin-button" type="submit">Submit</button>
          </form>
          { this.state.warning }
        </div>
      );
    }
    return res;
  }
}

function LoginView() {
  return (
    <div className="login-background-view">
      <h1>thomaszon</h1>
      <LoginForm />
    </div>
  );
}

export default LoginView;
