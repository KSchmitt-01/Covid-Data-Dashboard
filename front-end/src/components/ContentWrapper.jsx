import React from 'react';
import Grid from '@material-ui/core/Grid'
import LineChart from './graphs/LineChart';
import SemiDoughnut from './graphs/SemiDoughnut';
import PieChart from './graphs/PieChart';
import BarChart from './graphs/BarChart';
import BasicCardWrapper from './cards/BasicCardWrapper';

function ContentWrapper({schoolSelection}) {
  var vaccinePieChartOptions = {
    title:{
      text: "Total Vaccines By Type",
      align: 'Center',
      style: {
        fontSize:  '24px',
        fontWeight:  'bold',
        color:  '#263238'
      }
    },
    colors: ["#0033A0", "#D64309", "#d3d3d3"],
    labels: ["Moderna", "Pfizer", "Johnson & Johnson"],
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
  };
  
 return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <BasicCardWrapper selection={schoolSelection}/>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <LineChart selection={schoolSelection} options={vaccinePieChartOptions}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SemiDoughnut selection={schoolSelection}/>
        <PieChart selection={schoolSelection} options={vaccinePieChartOptions}/>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <BarChart selection={schoolSelection} options={vaccinePieChartOptions}/>
      </Grid>
    </Grid>
  );
}

export default ContentWrapper;