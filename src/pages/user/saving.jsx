import React from 'react';
import { Card, Col, Row } from 'antd';
import { PieChart } from '@mui/x-charts/PieChart';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const PieLabel = () => {
  const chartData = [
    { id: 0, value: 25, label: 'Achieved' },
    { id: 1, value: 75, label: 'Unachieved' },
  ];

  const props = {
    width: 250,  // Adjust width to fit within the card
    height: 250, // Adjust height as needed
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <PieChart
        {...props}
        series={[
          {
            data: chartData.map((item) => ({ id: item.id, value: item.value })),
            type: 'pie',
            arcLabel: () => '',
          },
        ]}
      />
      <div style={{ marginTop: '10px' }}>
        {chartData.map((item) => (
          <div key={item.id} style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
            <span style={{ color: '#4CAF50' }}>{item.label}</span> {item.value}%
          </div>
        ))}
      </div>
    </div>
  );
};

const SavingGoals = () => (
  <Row gutter={[16, 16]} justify="center" style={{ padding: '20px' }}>
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        title={<Title level={4}>Goal A</Title>}
        bordered={false}
        style={{
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '16px',
        }}
      >
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Name:</Text> <Text>Holiday</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Type:</Text> <Text>Short Term</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Amount:</Text> <Text>$10,000</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Currently Achieved:</Text> <Text>$200</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Deadline:</Text> <Text>September 4, 2024</Text>
        </div>
        <PieLabel />
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        title={<Title level={4}>Goal B</Title>}
        bordered={false}
        style={{
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '16px',
        }}
      >
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Name:</Text> <Text>Accidents</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Type:</Text> <Text>Long Term</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Amount:</Text> <Text>$200,000</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Currently Achieved:</Text> <Text>$3,000</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Deadline:</Text> <Text>January 1, 2029</Text>
        </div>
        <PieLabel />
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        title={<Title level={4}>Goal C</Title>}
        bordered={false}
        style={{
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '16px',
        }}
      >
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Name:</Text> <Text>Buy Refrigerator</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Type:</Text> <Text>Short Term</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Amount:</Text> <Text>$41,000</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Currently Achieved:</Text> <Text>$3,000</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Deadline:</Text> <Text>March 2, 2025</Text>
        </div>
        <PieLabel />
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        title={<Title level={4}>Goal D</Title>}
        bordered={false}
        style={{
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '16px',
        }}
      >
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Name:</Text> <Text>Yearly Vacation</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Type:</Text> <Text>Short Term</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Amount:</Text> <Text>$30,000</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Currently Achieved:</Text> <Text>$2,000</Text>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <Text strong>Deadline:</Text> <Text>September 1, 2025</Text>
        </div>
        <PieLabel />
      </Card>
    </Col>
  </Row>
);

export default SavingGoals;
