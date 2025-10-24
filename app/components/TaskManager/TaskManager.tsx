import React, { useState } from 'react';
import { Input, Button, List, Checkbox, Modal } from 'antd';
import { SearchOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { TaskManagerProps, Task } from './interface';

const TaskManager: React.FC<TaskManagerProps> = ({
  tasks,
  onSearch,
  onAdd,
  onDelete,
  onStatusChange
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleSearch = (value: string) => {
    onSearch(value);
  };

  const handleAdd = () => {
    if (newTaskTitle.trim()) {
      onAdd({
        title: newTaskTitle,
        completed: false
      });
      setNewTaskTitle('');
      setIsModalVisible(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="text-2xl font-bold mb-6">任务管理面板</div>

      <div className="flex gap-4 mb-6">
        <Input
          placeholder="请输入任务进行搜索"
          prefix={<SearchOutlined />}
          className="flex-1"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>
          新增任务
        </Button>
      </div>

      <List
        dataSource={tasks}
        renderItem={(task: Task) => (
          <List.Item className="flex items-center justify-between p-4 border rounded-lg mb-2 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <Checkbox
                checked={task.completed}
                onChange={(e) => onStatusChange(task.id, e.target.checked)}
              />
              <span className={task.completed ? 'line-through text-gray-400' : ''}>
                {task.title}
              </span>
            </div>
            <Button type="text" danger icon={<DeleteOutlined />} onClick={() => onDelete(task.id)}>
              删除
            </Button>
          </List.Item>
        )}
      />

      <Modal
        title="新增任务"
        open={isModalVisible}
        onOk={handleAdd}
        onCancel={() => setIsModalVisible(false)}
      >
        <Input
          placeholder="请输入新增的任务信息"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default TaskManager;
