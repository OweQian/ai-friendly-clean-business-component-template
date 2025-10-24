export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskManagerProps {
  tasks: Task[];
  onSearch: (keyword: string) => void;
  onAdd: (task: Omit<Task, 'id'>) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, completed: boolean) => void;
}
