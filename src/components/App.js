import React, { Component } from 'react';
import { firebase, auth, provider } from '../firebase';


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null
    }
  }
  login() {
    auth.doSignIn()
      .then((result) => {
        const user = result.user;
        this.setState({user});
      });
  }
  logout() {
    auth.doSignOut()
      .then(() => {
        this.setState({user: null});
      });
  }
  render() {
    return (
      <div>
       
        {this.state.user ?  <h1>Logout </h1> : <h1>Login</h1> }
       
        {this.state.user ? <button onClick={this.logout.bind(this)}>Log Out</button> : <button onClick={this.login.bind(this)}>Log In</button>}
      </div>
    );
  }
}

export default App;
