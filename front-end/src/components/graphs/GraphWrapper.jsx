import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageContainer from '../PageContainer';
import SemiDoughnut from './SemiDoughnut'
import PieChart from './PieChart'
import BSUWeektoWeek from './BSUWeektoWeek'


const useStyles = makeStyles({
  root: { paddingTop: '200px' },
  buttonGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
});

//BSU data
var vaccinePieChartOptions = {
  title:{
    text: "Total Vaccine Count Based on Type",
    align: 'center',
    floating: false,
    style:{
      color: '#000000'
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
var TotalByLocationPieChartOptions = {
  title:{
    text: "Total Cases by Campus Location From July 8th to Present",
    align: 'center',
    floating: false,
    style:{
      color: '#000000'
    }
  },
  colors: ["#F47920", "#333333","#828282", "#f69240", "#EEEEFF", "#A7A7A7", "#E6E7E8"],
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
    pieChartOptions = TotalByLocationPieChartOptions;
  }
  
  return (
    <PageContainer className={`${classes.root}`}>
        <BSUWeektoWeek/>
        <SemiDoughnut selection={selection}/>
        <PieChart selection={selection} options={pieChartOptions}/>
    </PageContainer>
  );
}

export default GraphWrapper;
