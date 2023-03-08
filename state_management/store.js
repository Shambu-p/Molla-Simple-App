import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import taskReducer from './reducers/task';

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});