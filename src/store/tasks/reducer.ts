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
    remove: (state, action: PayloadAction<string>) => {
      const indexOfItem = state.tasks.findIndex((task) => task.id === action.payload);
      if (indexOfItem !== -1) state.tasks = state.tasks.splice(indexOfItem, 1);
    },
  },
});

export const { add, remove } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
