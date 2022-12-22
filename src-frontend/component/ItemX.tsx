/**
 * Created by cshao on 2022/12/20.
 */

'use strict';

const React = require('react');

class ItemX extends React.Component {
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
      <div><h1>Welcome, item: {this.state.name}!</h1></div>
    );
  }
}

export default ItemX;