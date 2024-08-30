import React, { useState, useEffect } from 'react';
import IncomeChart from '../../components/incomeChart';
import ExpenseChart from '../../components/ExpenseChart'
import SavingChart from '../../components/SavingChart';
import MonthlySummaryCard from '../../components/MonthlySummaryCard';
export default function Statistics(){
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column',
    gap: '10px',
  };
    return (
        <>
            <h1 style={{ textAlign: 'center',paddingTop: '32px', marginBottom: '32px' }}>Here is a summary of your Finance</h1>
            <div style={containerStyle}>
                <IncomeChart />
                <ExpenseChart />
                <SavingChart />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '32px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                    <div style={{ marginTop: '32px', marginLeft: '32px' }}>
                        <h3 style={{ marginBottom: '32px' }}>Quarter one</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <MonthlySummaryCard />
                            <MonthlySummaryCard />
                            <MonthlySummaryCard />
                            </div>
                    </div>
                        
                    <div style={{ marginTop: '32px', marginLeft: '32px' }}>
                        <h3 style={{ marginBottom: '32px' }}>Quarter two</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <MonthlySummaryCard />
                            <MonthlySummaryCard />
                            <MonthlySummaryCard />
                            </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                    <div style={{ marginTop: '32px', marginLeft: '32px' }}>
                        <h3 style={{ marginBottom: '32px' }}>Quarter three</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <MonthlySummaryCard />
                            <MonthlySummaryCard />
                            <MonthlySummaryCard />
                            </div>
                    </div>
                    <div style={{ marginTop: '32px', marginLeft: '32px' }}>
                        <h3 style={{ marginBottom: '32px' }}>Quarter four</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <MonthlySummaryCard />
                            <MonthlySummaryCard />
                            <MonthlySummaryCard />
                            </div>
                    </div>
                </div>
            </div>


        </>
    );
}