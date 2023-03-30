import TaskForm from '@/app/components/modules/TaskForm';

export default function ToDo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">To Do List</h1>
      <TaskForm />
    </div>
  );
}
