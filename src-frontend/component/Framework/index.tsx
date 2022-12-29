/**
 * Created by cshao on 2022/12/20.
 */

'use strict';

import {Outlet, Link} from 'react-router-dom';

import './index.less';

const React = require('react');

export default function Framework() {
  return (
    <div className='framework'>
      <div className='menu pull-left'>
        <h2>Menu</h2>
        <nav>
          <ul>
            <li><Link to='itemX'>Item X</Link></li>
            <li><Link to='itemY'>Item Y</Link></li>
          </ul>
        </nav>
      </div>
      <div className='content pull-left'><Outlet /></div>
    </div>
  );
}