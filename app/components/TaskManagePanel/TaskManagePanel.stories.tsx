import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TaskManagePanel from './TaskManagePanel';
import { ITaskManagePanelProps } from './interface';

export default {
  title: 'Components/TaskManagePanel',
  component: TaskManagePanel
} as Meta;

const Template: StoryFn<ITaskManagePanelProps> = (args) => <TaskManagePanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: '1', content: '任务一', completed: true },
    { id: '2', content: '任务二', completed: true },
    { id: '3', content: '任务三', completed: false },
    { id: '4', content: '任务四', completed: false }
  ],
  onSearch: (keyword: string) => console.log('搜索:', keyword),
  onAdd: (content: string) => console.log('新增:', content),
  onDelete: (id: string) => console.log('删除:', id),
  onToggleComplete: (id: string) => console.log('切换完成状态:', id)
};
