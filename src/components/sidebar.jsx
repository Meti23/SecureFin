import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    key: 'sub2',
    label: 'Dashboard',
    icon: <AppstoreOutlined />,
    path: '/dashboard',
  },
  {
    key: 'sub1',
    label: 'Budget Planner',
    icon: <MailOutlined />,
    children: [
      {
        key: 'incomes',
        label: 'Incomes',
        path: '/incomes',
      },
      {
        key: 'expenses',
        label: 'Expenses',
        path: '/expenses',
      },
      {
        key: 'savingGoals',
        label: 'Saving Goals',
        path: '/savingGoals',
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Reports and Analytics',
    icon: <SettingOutlined />,
    children: [
      {
        key: 'report',
        label: 'Yearly Report',
        path: '/statistics',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'User profile and settings',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'account',
        label: 'Account',
        path: '/account',
      },
      {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Logout',
    icon: <AppstoreOutlined />,
    path: '/',
  },
];

const Sidebar = () => {
  const [current, setCurrent] = useState('incomes');
  // const location = useLocation();

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const menuItems = items.map((item) => ({
    ...item,
    children: item.children ? item.children.map((child) => ({
      ...child,
      label: <Link to={child.path}>{child.label}</Link>,
    })) : [],
  }));

  return (
    <div style={{ width: 256, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid #ddd' }}>
        {/* Removed the Switch component */}
      </div>
      <Menu
        onClick={onClick}
        style={{ flexGrow: 1 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={menuItems}
      />
    </div>
  );
};

export default Sidebar;
