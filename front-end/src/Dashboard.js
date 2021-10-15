import React from 'react';
import './Dashboard.css';
import DashboardHeader from './components/header/DashboardHeader'
import DashboardView from './components/DashboardView';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <DashboardHeader/>
      <header className="dashboard-header">
        <DashboardView/>
      </header>
    </div>
  );
}

export default Dashboard;