/**
 * Created by cshao on 2022/12/16.
 */

'use strict';

import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';

import router from './router';
import store from './store';

import './main.less';

const React = require('react');

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);