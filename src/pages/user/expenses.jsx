import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Typography } from 'antd';
import Highlighter from 'react-highlight-words';

const { Title, Text } = Typography;

const initialData = [
  {
    key: '1',
    name: { first: 'John', last: 'Brown' },
    incomeType: 'variable',
    amount: 32,
    month: 'January',
  },
  {
    key: '2',
    name: { first: 'Joe', last: 'Black' },
    incomeType: 'constant',
    amount: 42,
    month: 'February',
  },
  {
    key: '3',
    name: { first: 'Jim', last: 'Green' },
    incomeType: 'variable',
    amount: 32,
    month: 'March',
  },
  {
    key: '4',
    name: { first: 'Jim', last: 'Red' },
    incomeType: 'constant',
    amount: 32,
    month: 'April',
  },
];

const Expenses = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [data, setData] = useState(initialData);
  const [count, setCount] = useState(initialData.length + 1);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Expense Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      render: (name) => `${name.first} ${name.last}`,
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      width: '20%',
      ...getColumnSearchProps('amount'),
      render: (text) => <Text>${text}</Text>,
    },
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
      ...getColumnSearchProps('month'),
      sorter: (a, b) => a.month.length - b.month.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  const handleAdd = (category) => {
    const newData = {
      key: count.toString(),
      name: { first: 'New', last: `Entry ${count}` },
      incomeType: 'variable',
      amount: 0,
      month: 'January',
    };
    setData([...data, newData]);
    setCount(count + 1);
  };

  const calculateTotalAmount = (data) => data.reduce((sum, record) => sum + record.amount, 0);

  const renderTable = (title, category) => (
    <div style={{ marginBottom: '32px' }}>
      <Title level={3}>{title}</Title>
      <Button
        onClick={() => handleAdd(category)}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell>Total</Table.Summary.Cell>
            <Table.Summary.Cell colSpan={2} />
            <Table.Summary.Cell>
              <Text strong>${calculateTotalAmount(data)}</Text>
            </Table.Summary.Cell>
            <Table.Summary.Cell />
          </Table.Summary.Row>
        )}
        pagination={false}
        bordered
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      />
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <Title style={{ textAlign: 'center', marginBottom: '32px' }}>Expense Tracker</Title>
      {renderTable('Utility Bills')}
      {renderTable('Transport Expenses')}
      {renderTable('Grocery Shopping')}
      {renderTable('Personal Items')}
      {renderTable('Loan')}
      {renderTable('Others')}
    </div>
  );
};

export default Expenses;
