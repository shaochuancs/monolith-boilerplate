/**
 * Created by cshao on 2022/12/21.
 */

'use strict';

import {Component} from 'react';

import Counter from '../Counter';

import './index.less';

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
      <div className='y-wrapper'>
        <h1>Welcome Y, item: {this.state.name}!</h1>
        <Counter />
      </div>
    );
  }
}

export default ItemY;