import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

function PieChart({selection, innerTheme}) {
  const[occupants, setOccupants] = useState([50,50]);

  let coulor = ["#0033A0", "#D64309", "#d3d3d3"];
  let chartTitle = "Total Vaccines By Type";
  let labels =["Moderna", "Pfizer", "Johnson & Johnson"];
  let route = '/total-vaccinations-per-type';

  if(selection === "Idaho State University"){
    route = '/total_cases_by_location';
    coulor = ["#F47920", "#333333","#828282", "#f69240", "#B8B8B9", "#A7A7A7", "#CFCFD0"];
    labels =["Pocatello", "Meridian", "Idaho Falls", "Twin Falls", "Off Campus", "Experiential", "Satellite"];
    chartTitle = "Total Cases - July 8th to Present";
  } else{
    route = '/total-vaccinations-per-type';
    coulor = ["#0033A0", "#D64309", "#d3d3d3"];
    labels =["Moderna", "Pfizer", "Johnson & Johnson"];
    chartTitle = "Total Vaccines By Type";
  }

  useEffect(() =>
    {fetch(route).then(res => res.json()).then(data =>
        {setOccupants(data.vaccinations);
        });
    }, [route, selection]);

    return (
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '25px'
      }}>
        <Paper elevation={3} sx={{width: '100%'}}>
          <Chart
            options={{
              title:{
                text: chartTitle,
                align: 'Center',
                style: {
                  fontSize:  '24px',
                  fontWeight:  'bold',
                  color:  innerTheme.palette.text.primary
                }
              },
              legend: {
                fontSize: '14px',
                position: 'right',
                labels: {
                  colors: innerTheme.palette.text.primary
                },
              },
              tooltip:{
                style:{
                  fontSize: '18px'
                }
              },
              dataLabels:{
                style:{
                  fontSize:'18px'
                }
              },
              colors: coulor,
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
            type={'pie'}
            width="100%"
          />
        </Paper>
      </Box>
    );
  }

export default PieChart;