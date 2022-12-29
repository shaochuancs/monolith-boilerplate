/**
 * Created by cshao on 2022/12/22.
 */

'use strict';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {decrement, increment} from './counterSlice';

import './index.less';

const React = require('react');

export default function Counter() {
  const count = useAppSelector((state)=>state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className='counter-wrapper'>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span className='result'>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}