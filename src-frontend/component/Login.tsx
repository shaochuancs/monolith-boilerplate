/**
 * Created by cshao on 2022/12/20.
 */

'use strict';

import axios from 'axios';
import {ChangeEvent, Component, FormEvent} from 'react';

const React = require('react');

type State = {
  username: string,
  password: string
};

class Login extends Component<object, State> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      username: e.target.value
    });
  }

  onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e: FormEvent) {
    e.preventDefault();
    axios.post('/api/login', {
      username: this.state.username.trim(),
      password: this.state.password.trim()
    }).then((res)=>{
      console.log(res);
    }).catch((error)=>{
      alert(error.message);
    });
  }

  render() {
    return (
      <form onSubmit={(e)=>this.onSubmit(e)}>
        <input
          required
          placeholder='Username'
          type='text'
          name='username'
          value={this.state.username}
          onChange={(e)=>this.onUsernameChange(e)} />
        <input
          required
          placeholder='Password'
          type='password'
          name='password'
          value={this.state.password}
          onChange={(e)=>this.onPasswordChange(e)} />
        <input type='submit' value='Login'/>
      </form>
    );
  }
}

export default Login;