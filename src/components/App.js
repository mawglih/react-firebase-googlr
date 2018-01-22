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
  componentDidMount() {
    auth.doOnStateChange((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }
  login() {
    auth.doSignIn()
      .then((result) => {
        const user = result.user;
        this.setState({user}, () => {
          console.log(this.state.user);
        });
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
        {this.state.user ?
          <div><h2>Your name:{this.state.user.displayName}</h2><br /> <img src={this.state.user.photoURL}/></div>
          : <div>you must be logged in</div>
        }
      </div>
    );
  }
}

export default App;
