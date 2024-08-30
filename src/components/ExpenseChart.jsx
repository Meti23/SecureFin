import React from 'react';
import { Card } from 'antd';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'Expense A' },
  { id: 1, value: 15, label: 'Expense B' },
  { id: 2, value: 20, label: 'Expense C' },
  { id: 3, value: 20, label: 'Expense D' },
  { id: 4, value: 20, label: 'Expense E' },
  { id: 5, value: 20, label: 'Expense F' },
];

const chartProps = {
  height: 250,  // Consistent height with other charts
  width: 250,   // Consistent width with other charts
};

const ExpenseChart = () => (
  <Card
    title="Expense Chart"
    style={{
      width: '100%',
      maxWidth: '350px',
      margin: '20px auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow
      backgroundColor: '#f9f9f9', // Add background color
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        {...chartProps}
      />
    </div>
  </Card>
);

export default ExpenseChart;
