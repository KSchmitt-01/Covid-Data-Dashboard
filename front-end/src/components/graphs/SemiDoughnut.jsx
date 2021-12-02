import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

function SemiDoughnut({selection}) {
  const[occupants, setOccupants] = useState([50,50]);
  const[title, setTitle] = useState('Isolation Capacity');
  const[labels, setLabels] = useState(["Occupied Beds (%)", "Available Beds (%)"]);
  const[colors, setColors] = useState(["#0033A0", "#D64309"]);

  let route = '/isolation-bed-occupants';
  if(selection === "Boise State University"){
    route = '/isolation-bed-occupants';
  } else if(selection === "Idaho State University"){
    route = '/test-route';
  }else{
    route = '/test-route';
  }

  useEffect(() =>
    {fetch(route).then(res => res.json()).then(data =>
        {
          setOccupants(data.Total);
          setTitle(data.Title);
          setLabels(data.Labels);
          setColors(data.Colors);
        });
    }, [route, selection]);

    return (
      <Box  sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        <Paper elevation={3} sx={{width: '100%'}}>
          <Chart
            options={{
              colors: colors,
              title: {
                text: title,
                align: 'Center',
                style: {
                  fontSize:  '24px',
                  fontWeight:  'bold',
                  color:  '#263238'
                },
              },
              labels: labels,
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }}
            series={occupants}
            labels={['test1', 'test2']}
            type={'donut'}
            width="100%"
          />
        </Paper>
      </Box>
    );
  }

export default SemiDoughnut;