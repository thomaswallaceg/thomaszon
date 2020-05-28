import React from 'react';
import ReactDOM from 'react-dom';
import { HttpService } from './networking/HttpRequest';
import './assets/login.css';

const httpService = new HttpService();

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
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
    // eslint-disable-next-line no-unused-vars
    const { success, message } = await httpService.post(
      'login',
      { username: this.state.username, password: this.state.password },
    );
    // TODO: react to successful login
  }

  render() {
    return (
      <form className="login-box" onSubmit={this.handleSignIn}>
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
    );
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

ReactDOM.render(
  <LoginView />,
  document.getElementById('root'),
);
