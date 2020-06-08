import React from 'react';
import { Redirect } from 'react-router-dom';
import { SessionController as RegisterController } from '../networking/SessionController';
import { InputField } from '../common/inputField';
import { PreLoginForm } from '../common/preLoginForm';
import '../assets/preLogin.css';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', password: '', repeatedPassword: '', redirect: '', warning: null,
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRepeatedPasswordChange = this.handleRepeatedPasswordChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleUserChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    this.checkPasswordMatch(event.target.value, this.state.repeatedPassword);
  }

  handleRepeatedPasswordChange(event) {
    this.setState({ repeatedPassword: event.target.value });
    this.checkPasswordMatch(this.state.password, event.target.value);
  }

  checkPasswordMatch(password, repeatedPassword) {
    this.setState({
      warning: password === repeatedPassword
        ? null
        : <div className="prelogin-error-text">Passwords do not match</div>,
    });
    return password === repeatedPassword;
  }

  async handleRegister(event) {
    event.preventDefault();
    const { username, password, repeatedPassword } = this.state;
    if (this.checkPasswordMatch(password, repeatedPassword) && password !== '') {
      const { success, message } = await RegisterController.register(username, password);
      if (success) {
        this.setState({ redirect: '/login' });
      } else {
        this.setState({ warning: <div className="prelogin-error-text">{message}</div> });
      }
    }
  }

  render() {
    let res = null;
    if (this.state.redirect) {
      res = <Redirect to={this.state.redirect} />;
    } else {
      res = (
        <div className="register-page">
          <PreLoginForm handleSubmit={this.handleRegister} buttonText="Register">
            <InputField title="Username" type="text" currentText={this.state.username} handleTextChange={this.handleUserChange} />
            <InputField title="Password" type="password" currentText={this.state.password} handleTextChange={this.handlePasswordChange} />
            <InputField title="Repeat Password" type="password" currentText={this.state.repeatedPassword} handleTextChange={this.handleRepeatedPasswordChange} />
          </PreLoginForm>
          { this.state.warning }
        </div>
      );
    }
    return res;
  }
}

function RegisterView() {
  return (
    <div className="prelogin-background-view">
      <h1>thomaszon</h1>
      <RegisterForm />
    </div>
  );
}


export { RegisterView };
