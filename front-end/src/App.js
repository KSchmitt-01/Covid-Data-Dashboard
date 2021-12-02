import React from 'react';
import './App.css';
import DashboardView from './components/DashboardView';
import VacinationTable from "./components/graphs/VacinationTable";
import VacinationSmallTable from "./components/graphs/VacinationTableTotalAndLatestWeek"

function App() {
  return (
    <div className="App">
      <DashboardView/>
        <VacinationSmallTable/>
    </div>
  );
}

export default App;