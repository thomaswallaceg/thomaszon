import React from 'react';
import { Redirect } from 'react-router-dom';
import { SessionController as LogoutController } from '../networking/SessionController';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: '' };
    this.handleLogout = this.handleLogout.bind(this);
  }

  async handleLogout(event) {
    event.preventDefault();
    await LogoutController.logout();
    this.setState({ redirect: 'login' });
  }

  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirect} />;
    return (
      <div>
        <href className="home-logout-link" onClick={this.handleLogout}>Log out</href>
      </div>
    );
  }
}

export { Homepage };
