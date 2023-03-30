import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Textarea from '../../elements/Textarea';

export default function TaskForm() {
  return (
    <form name="todo" className="flex flex-col max-w-[500px] w-full">
      <Input name="task" placeholder="Task name..." />
      <Textarea placeholder="Task description..." />
      <Button type="submit" className="w-min mx-auto px-12">
        Submit
      </Button>
    </form>
  );
}
