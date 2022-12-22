/**
 * Created by cshao on 2022/12/21.
 */

'use strict';

import {Component} from 'react';

const React = require('react');

type State = {
  name: string
};

class ItemY extends Component<object, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        name: 'Y'+Math.random()
      });
    }, 2000);
  }

  render() {
    return (
      <div><h1>Welcome, item: {this.state.name}!</h1></div>
    );
  }
}

export default ItemY;