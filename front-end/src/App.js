import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@mui/material/Button'
import DashboardHeader from './components/header/DashboardHeader'
import Welcome from './components/Welcome'
import SemiDoughnut from './components/graphs/SemiDoughnut';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() =>
    {fetch('/isolation-bed-occupants').then(res => res.json()).then(data =>
        {setCurrentTime(data.Occupants);
        });
    }, []);

  return (
    <div className="App">
      {/* This should just be <DashboardView/> at the end of the project!!! */}
      <DashboardHeader/>
      <div class="main">
        <Welcome/> 
        <SemiDoughnut/>
      </div>
      <div>
        <Button variant="contained" color="primary" size="large">
            {currentTime}
        </Button>
          ... no changes in this part ...
          <p>My example text is {currentTime}.</p>
      </div>
    </div>
  );
}

export default App;