import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button'
import PageContainer from '../components/page-container/PageContainer';

function DashboardView() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
      fetch('/time').then(res => res.json()).then(data => {
        setCurrentTime(data.testJson);
      });
    }, []);
  
  return (
    <PageContainer className="flex-container space-around">
      <div className="quarter-flex">
        <h1>SAMPLE TEXT</h1>
        <Button variant="contained" color="primary" size="large">
          {currentTime}
        </Button>
        ... no changes in this part ...
        <p>My example text is {currentTime}.</p>
      </div>
    </PageContainer>
  );
}

export default DashboardView;