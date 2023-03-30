import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './tasks/reducer';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});
