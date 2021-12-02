import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageContainer from '../PageContainer';
import SemiDoughnut from './SemiDoughnut'
import LineChart from './LineChart'
import PieChart from './PieChart'
import BarChart from './BarChart';


const useStyles = makeStyles({
  root: { paddingTop: '200px' }
});

//BSU 
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

//ISU
var totalByLocationPieChartOptions = {
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

function GraphWrapper({selection}) {
  const classes = useStyles();

  var pieChartOptions;

  if(selection === 'Boise State University')
  {
    pieChartOptions = vaccinePieChartOptions;
  }
  else
  {
    pieChartOptions = totalByLocationPieChartOptions;
  }
  
  return (
    <PageContainer className={`${classes.root}`}>
        <div class = "container">
          <LineChart selection={selection}/>
          <SemiDoughnut selection={selection}/>
          <PieChart selection={selection} options={pieChartOptions}/>
          <BarChart selection={selection}/>
        </div>
    </PageContainer>
  );
}

export default GraphWrapper;
