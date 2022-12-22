/**
 * Created by cshao on 2022/12/22.
 */

'use strict';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {decrement, increment} from './counterSlice';

const React = require('react');

export default function Counter() {
  const count = useAppSelector((state)=>state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}