export type TaskType = { id: string; title: string; description?: string };

export type ReducerTasksTypes = {
  tasks: TaskType[];
};
