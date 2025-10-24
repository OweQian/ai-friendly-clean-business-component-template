export interface ITask {
  id: string;
  content: string;
  completed: boolean;
}

export interface ITaskManagePanelProps {
  tasks: ITask[];
  onSearch: (keyword: string) => void;
  onAdd: (content: string) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}
