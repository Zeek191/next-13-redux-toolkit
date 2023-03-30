import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './tasks/reducer';

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});

export default store;
