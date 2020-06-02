import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginView from './pages/login';
import Homepage from './pages/home';

export default function App() {
  return (
    <Router>
      <div>
        <Redirect from="/" to="/login" />
        <Switch>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
