import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt,
} from 'react-router-dom';

const User = (props: any) => {
  return <div>Welcome User {props.username}</div>;
};
const NotFound = (props: any) => {
  return <div>NotFound</div>;
};

export interface RoutingProps {}

export interface RoutingState {
  loggedIn: boolean
}

class Routing extends React.Component<RoutingProps, RoutingState> {
  state = {
    loggedIn: false,
  };
  constructor(props: RoutingProps) {
    super(props);
    console.log('constructor');
  }
  handleLogin = () => {
    this.setState((previousState) => ({
      loggedIn: !previousState.loggedIn
    }));
  };
  render() {
    console.log('render');
    const { loggedIn } = this.state;
    console.log('loggedIn ', loggedIn);
    return (
      <>
        <Router>
          <ul>
            <li>
              <NavLink activeStyle={{ color: 'green' }} exact to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: 'green' }} exact to='/about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: 'green' }} exact to='/contact'>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: 'green' }} exact to='/user/asdf'>
                User Deva
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: 'green' }} exact to='/user/abc'>
                User abc
              </NavLink>
            </li>
            <li>
              <button onClick={this.handleLogin.bind(this)}>
                {loggedIn ? 'Log out' : 'Log in'}
              </button>
            </li>
          </ul>
          <Route
            path='/'
            exact
            strict
            render={() => {
              return <div>Home page</div>;
            }}
          />
          <Route
            path='/about/'
            exact
            strict
            render={() => {
              return <div>About page</div>;
            }}
          />
          <Route
            path='/contact'
            exact
            strict
            render={() => {
              return <div>Contact page</div>;
            }}
          />
          <Prompt 
          when = {!loggedIn}
          message = {(location) => {
            return location.pathname.startsWith('/user') ? 'Are you sure' : true
          }}
          />
          <Route
            path='/user/:username'
            exact
            strict
            render={({ match }) =>
              loggedIn ? (
                <User username={match.params.username} />
              ) : (
                <Redirect to='/' />
              )
            }
          />
        </Router>
      </>
    );
  }
}

export default Routing;
