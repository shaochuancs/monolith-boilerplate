/**
 * Created by cshao on 2022/12/20.
 */

'use strict';

import {createBrowserRouter} from "react-router-dom";

import ErrorPage from './component/ErrorPage';
import Framework from './component/Framework';
import Item from './component/Item';
import Login from './component/Login';

const React = require('react');

const router = createBrowserRouter([{
  path: '/app',
  element: <Framework />,
  errorElement: <ErrorPage />,
  children: [{
    path: 'item/:itemId',
    element: <Item />
  }]
}, {
  path: '/app/login',
  element: <Login />
}]);

export default router;