import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './component/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisPatch = typeof store.dispatch;

export default store;