import React, { useState } from 'react';
import { Input, Button, Modal } from 'antd';
import { SearchOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';
import { ITaskManagePanelProps } from './interface';

const TaskManagePanel: React.FC<ITaskManagePanelProps> = ({
  tasks,
  onSearch,
  onAdd,
  onDelete,
  onToggleComplete
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch(value);
  };

  const handleAdd = () => {
    if (newTaskContent.trim()) {
      onAdd(newTaskContent);
      setNewTaskContent('');
      setIsModalVisible(false);
    }
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow">
      <div className="text-xl font-bold mb-4">任务管理面板</div>

      <div className="flex gap-4 mb-6">
        <Input
          className="flex-1"
          placeholder="请输入任务进行搜索"
          prefix={<SearchOutlined />}
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>
          新增任务
        </Button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer
                  ${task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}
                onClick={() => onToggleComplete(task.id)}
              >
                {task.completed && <CheckOutlined className="text-white text-sm" />}
              </div>
              <span className={task.completed ? 'line-through text-gray-400' : ''}>
                {task.content}
              </span>
            </div>
            <Button type="link" danger onClick={() => onDelete(task.id)}>
              删除
            </Button>
          </div>
        ))}
      </div>

      <Modal
        title="新增任务"
        open={isModalVisible}
        onOk={handleAdd}
        onCancel={() => setIsModalVisible(false)}
        okText="确认"
        cancelText="取消"
      >
        <Input
          placeholder="请输入新增的任务信息"
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default TaskManagePanel;
