import React from 'react';
import { Card, Col, Row } from 'antd';
import { PieChart } from '@mui/x-charts/PieChart';

const PieLabel = () => {
  const chartData = [
    { id: 0, value: 10, label: 'A' },
    { id: 1, value: 15, label: 'B' },
  ];

  const props = {
    width: 300,  // Adjust width to fit within the card
    height: 200, // Adjust height as needed
  };

  return (
    <div style={{ textAlign: 'center' }}>
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
      <div>
        {chartData.map((item) => (
          <div key={item.id}>
            Legend {item.label} + {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const SavingGoals = () => (
  <Row gutter={[16, 16]} justify="center">
    <Col xs={24} sm={12} md={6}>
      <Card title="Goal A" bordered={false} style={{ width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Name: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Type: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Amount: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>currently Achived: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Deadline: </p><p> Holiday</p></div>
        <PieLabel />
      </Card>
    </Col>
    <Col xs={24} sm={12} md={6}>
      <Card title="Goal B" bordered={false} style={{ width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Name: </p><p> Accidents</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Type: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Amount: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>currently Achived: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Deadline: </p><p> Holiday</p></div>
        <PieLabel />
      </Card>
    </Col>
    <Col xs={24} sm={12} md={6}>
      <Card title="Goal C" bordered={false} style={{ width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Name: </p><p>Buy refrigerator</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Type: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Amount: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>currently Achived: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Deadline: </p><p> Holiday</p></div>
        <PieLabel />
      </Card>
    </Col>
    <Col xs={24} sm={12} md={6}>
      <Card title="Goal D" bordered={false} style={{ width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Name:</p><p>Yearly Vacation</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Type: </p><p>Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Amount: </p><p>Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>currently Achived: </p><p> Holiday</p></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><p>Deadline: </p><p> Holiday</p></div>
        <PieLabel />
      </Card>
    </Col>
  </Row>
);

export default SavingGoals;
