'use client';

import { useAppDispatch } from '@/store/hooks';
import { add } from '@/store/tasks/reducer';
import { TaskType } from '@/store/tasks/types';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Textarea from '../../elements/Textarea';

export default function TaskForm() {
  const [formState, setFormState] = useState<Omit<TaskType, 'id'>>({ title: '', description: '' });
  const dispatch = useAppDispatch();

  const changeTitleValue = _changeValue('title');
  const changeDescriptionValue = _changeValue('description');

  function _changeValue(key: keyof Omit<TaskType, 'id'>) {
    return function (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      return setFormState((prevState) => ({ ...(prevState || {}), [key]: value.target.value }));
    };
  }

  function _submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    return dispatch(add({ id: String(Date.now()), ...formState }));
  }

  return (
    <form onSubmit={_submitForm} name="todo" className="flex flex-col max-w-[500px] w-full">
      <Input required name="task" placeholder="Task name..." onChange={changeTitleValue} />
      <Textarea placeholder="Task description..." onChange={changeDescriptionValue} />
      <Button type="submit" className="w-min mx-auto px-12">
        Submit
      </Button>
    </form>
  );
}
