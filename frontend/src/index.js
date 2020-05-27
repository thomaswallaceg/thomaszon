import React from 'react';
import ReactDOM from 'react-dom';
import './assets/login.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleUserChange(event) {
    this.setState({ user: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  // eslint-disable-next-line class-methods-use-this
  handleSignIn(event) {
    // SEND LOGIN INFO
    event.preventDefault();
  }

  render() {
    return (
      <form className="login-box" onSubmit={this.handleSignIn}>
        <div className="login-field-user">
          <label htmlFor="username">Username:</label>
          <input type="text" value={this.state.user} onChange={this.handleUserChange} />
        </div>
        <div className="login-field-password">
          <label htmlFor="password">Password:</label>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </div>
        <input className="login-signin-button" type="submit" value="Submit" />
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
