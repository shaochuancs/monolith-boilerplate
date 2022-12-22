/**
 * Created by cshao on 2022/12/21.
 */

'use strict';

const React = require('react');

class ItemY extends React.Component {
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