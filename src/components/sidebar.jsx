import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const items = [
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
        label: 'Statistics',
        path: '/statistics',
      },
      {
        key: 'Analysis',
        label: 'Analysis and recommendation',
        path: '/analysis',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'User profile and settings',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'profile',
        label: 'Profile',
        path: '/profile',
      },
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
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('incomes');
  const location = useLocation();

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

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
        <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
      <Menu
        theme={theme}
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
