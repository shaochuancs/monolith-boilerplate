/**
 * Created by cshao on 2022/12/22.
 */

'use strict';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDisPatch} from './store';

export const useAppDispatch: () => AppDisPatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;