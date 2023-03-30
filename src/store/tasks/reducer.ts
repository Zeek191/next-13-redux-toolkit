import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../types';
import { ReducerTasksTypes, TaskType } from './types';

const initialState: ReducerTasksTypes = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TaskType>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { add } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
