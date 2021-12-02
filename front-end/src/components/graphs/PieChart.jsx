import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

function PieChart({selection, options}) {
  const[occupants, setOccupants] = useState([50,50]);

  let route = '/total-vaccinations-per-type';
  if(selection === "Boise State University"){
    route = '/total-vaccinations-per-type';
  } else if(selection === 'Idaho State University'){
    route = '/total_cases_by_location';
  } else{
    route = '/test-route';
  }

  useEffect(() =>
    {fetch(route).then(res => res.json()).then(data =>
        {setOccupants(data.vaccinations);
        });
    }, [route, selection]);

    return (
      <Box  sx={{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '25px'
      }}>
        <Paper elevation={3} sx={{width: '100%'}}>
          <Chart
            options={options}
            series={occupants}
            type={'pie'}
            width="100%"
          />
        </Paper>
      </Box>
    );
  }

export default PieChart;