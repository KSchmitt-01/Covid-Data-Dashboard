import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@mui/material/Button'
import DashboardHeader from './components/header/DashboardHeader'
import Welcome from './components/Welcome'

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() =>
    {fetch('/isolationbedoccupants').then(res => res.json()).then(data =>
        {setCurrentTime(data.Occupants);
        });
    }, []);



  return (
    <div className="App">
      <DashboardHeader/>
      <header className="App-header">
        <Button variant="contained" color="primary" size="large">
          {currentTime}
        </Button>
        ... no changes in this part ...
        <p>My example text is {currentTime}.</p>

      </header>
        <Welcome/>
    </div>
  );
}

export default App;