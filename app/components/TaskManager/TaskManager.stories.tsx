import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TaskManager from './TaskManager';
import { Task } from './interface';

const meta: Meta<typeof TaskManager> = {
  title: 'Components/TaskManager',
  component: TaskManager,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TaskManager>;

const Demo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: '任务一', completed: true },
    { id: '2', title: '任务二', completed: true },
    { id: '3', title: '任务三', completed: false },
    { id: '4', title: '任务四', completed: false }
  ]);

  const handleSearch = (keyword: string) => {
    console.log('Searching:', keyword);
  };

  const handleAdd = (task: Omit<Task, 'id'>) => {
    const newTask = {
      ...task,
      id: Math.random().toString(36).substr(2, 9)
    };
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleStatusChange = (id: string, completed: boolean) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed } : task)));
  };

  return (
    <TaskManager
      tasks={tasks}
      onSearch={handleSearch}
      onAdd={handleAdd}
      onDelete={handleDelete}
      onStatusChange={handleStatusChange}
    />
  );
};

export const Default: Story = {
  render: () => <Demo />
};

export const Empty: Story = {
  render: () => (
    <TaskManager
      tasks={[]}
      onSearch={() => {}}
      onAdd={() => {}}
      onDelete={() => {}}
      onStatusChange={() => {}}
    />
  )
};
