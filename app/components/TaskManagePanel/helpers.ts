// Helper functions for TaskManagePanel component

import { ITask } from './interface';

/**
 * Filter tasks based on search keyword
 */
export const filterTasksByKeyword = (tasks: ITask[], keyword: string): ITask[] => {
  if (!keyword.trim()) {
    return tasks;
  }
  return tasks.filter((task) => task.content.toLowerCase().includes(keyword.toLowerCase()));
};

/**
 * Toggle task completion status
 */
export const toggleTaskCompletion = (tasks: ITask[], id: string): ITask[] => {
  return tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
};

/**
 * Delete a task by id
 */
export const deleteTask = (tasks: ITask[], id: string): ITask[] => {
  return tasks.filter((task) => task.id !== id);
};

/**
 * Generate a unique id for new task
 */
export const generateTaskId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};
