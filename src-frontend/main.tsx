/**
 * Created by cshao on 2022/12/16.
 */

'use strict';

import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import ErrorPage from "./ErrorPage";
import Item from "./route/Item";
import Root from './route/Root';


const React = require('react');

const router = createBrowserRouter([{
    path: '/app',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
      path: 'item/:itemId',
      element: <Item />
    }]
  }]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);