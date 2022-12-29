/**
 * Created by cshao on 2022/12/20.
 */

'use strict';

import {Component} from 'react';

import Counter from '../Counter';

import './index.less';

const React = require('react');

type State = {
  name: string
};

class ItemX extends Component<object, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        name: 'X'+Math.random()
      });
    }, 2000);
  }

  render() {
    return (
      <div className='x-wrapper'>
        <h1>Welcome X, item: {this.state.name}!</h1>
        <Counter />
      </div>
    );
  }
}

export default ItemX;