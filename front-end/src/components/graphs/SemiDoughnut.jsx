import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

function SemiDoughnut({selection, innerTheme}) {
  const[occupants, setOccupants] = useState([50,50]);

  let coulor = ["#0033A0", "#D64309"];
  let chartTitle = "Isolation Capacity";
  let labels =["Occupied Bed (%)", "Avaliable Beds (%)"];
  let route = '/isolation-bed-occupants';

  if(selection === "Idaho State University"){
    route = '/isu-cases-by-category';
    coulor = ["#828282", "#f69240"];
    chartTitle = "Total Cases by Category";
    labels =["Students", "Faculty/Staff"];
  } else{
    route = '/isolation-bed-occupants';
    coulor = ["#0033A0", "#D64309"];
    chartTitle = "Isolation Capacity";
    labels =["Occupied Bed (%)", "Avaliable Beds (%)"];
  }

  useEffect(() =>
    {fetch(route).then(res => res.json()).then(data =>
        {
          setOccupants(data.Total);
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
              colors: coulor,
              title: {
                text: chartTitle,
                align: 'Center',
                style: {
                  fontSize:  '24px',
                  fontWeight:  'bold',
                  color:  innerTheme.palette.text.primary
                },
              },
              legend:{
                fontSize: '14px',
                position: 'right',
                labels: {
                  colors: innerTheme.palette.text.primary
                }
              },
              tooltip:{
                style:{
                  fontSize: '18px'
                }
              },
              dataLabels:{
                style:{
                  fontSize: '18px'
                }
              },
              labels: labels,
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
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