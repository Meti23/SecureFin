import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MonthlySummaryCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        border: '1px solid #ddd',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        padding: '16px',
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: '#4CAF50' }}>
          January
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px', color: '#2196F3' }}>
          Income: 50,000
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px', color: '#F44336' }}>
          Expense: 20,000
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px', color: '#FFC107' }}>
          Saving Goal: 15,000
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px', color: '#9C27B0' }}>
          Net: 30,000
        </Typography>
      </CardContent>
    </Card>
  );
}
