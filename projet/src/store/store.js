import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../tasksSlice/tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
