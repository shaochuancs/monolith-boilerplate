/**
 * Created by cshao on 2022/12/16.
 */

'use strict';

import {createRoot} from "react-dom/client";

const React = require('react');

class App extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);