import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@mui/material/Button'


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.testJson);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary" size="large">
          {currentTime}
        </Button>
        ... no changes in this part ...
        <p>My example text is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;