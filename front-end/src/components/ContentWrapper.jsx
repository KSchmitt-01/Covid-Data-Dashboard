import React from 'react';
import Grid from '@material-ui/core/Grid'
import LineChart from './graphs/LineChart';
import SemiDoughnut from './graphs/SemiDoughnut';
import PieChart from './graphs/PieChart';
import BarChart from './graphs/BarChart';
import BasicCardWrapper from './cards/BasicCardWrapper';

function getPieChartOptions(school){
  //BSU
  const vaccinePieChartOptions = {
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

  //ISU
  const totalByLocationPieChartOptions = {
    title:{
      text: "Total Cases - July 8th to Present",
      align: 'Center',
      style: {
        fontSize:  '24px',
        fontWeight:  'bold',
        color:  '#263238'
      }
    },
    colors: ["#F47920", "#333333","#828282", "#f69240", "#B8B8B9", "#A7A7A7", "#CFCFD0"],
    labels: ["Pocatello", "Meridian", "Idaho Falls", "Twin Falls", "Off Campus", "Experiential", "Satellite"],
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
  if(school === 'Idaho State University') return totalByLocationPieChartOptions;
  else return vaccinePieChartOptions;
}

function ContentWrapper({schoolSelection}) {
  const options = getPieChartOptions(schoolSelection);

 return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <BasicCardWrapper selection={schoolSelection}/>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <LineChart selection={schoolSelection} options={options}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SemiDoughnut selection={schoolSelection}/>
        <PieChart selection={schoolSelection} options={options}/>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <BarChart selection={schoolSelection} options={options}/>
      </Grid>
    </Grid>
  );
}

export default ContentWrapper;