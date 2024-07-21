import React from 'react';
import Filter from './Filter';
import BarChart from './Charts/BarChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';

const Dashboard = () => {
  return (
    <div>
      <Filter />
      <BarChart />
      <LineChart />
      <PieChart />
    </div>
  );
};

export default Dashboard;
