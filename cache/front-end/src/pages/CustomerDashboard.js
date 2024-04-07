// Dashboard.js
import React from 'react';
import EnergyChart from './EnergyChart';

const Dashboard = () => {
  const chartData = {
    labels: ['Industry 1', 'Industry 2', 'Industry 3', 'Industry 4', 'Industry 5'],
    values: [50, 30, 60, 40, 70]
  };

  return (
    <div>
      <h1>Energy Optimization Dashboard</h1>
      <EnergyChart data={chartData} />
    </div>
  );
};

export default Dashboard;
