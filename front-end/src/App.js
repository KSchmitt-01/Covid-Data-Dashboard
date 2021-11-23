import React, { useState, useEffect } from 'react';
import './App.css';
import DashboardView from './components/DashboardView';


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() =>
    {fetch('/school-year-cases').then(res => res.json()).then(data =>
        {setCurrentTime(data.Total);
        });
    }, []);

  return (
    <div className="App">
      <DashboardView/>
    </div>
  );
}

export default App;