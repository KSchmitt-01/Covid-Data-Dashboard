import React from 'react';
import './App.css';
import DashboardView from './components/DashboardView';
import VacinationTable from "./components/graphs/VacinationTable";

function App() {
  return (
    <div className="App">
      <DashboardView/>
        <VacinationTable/>
    </div>
  );
}

export default App;