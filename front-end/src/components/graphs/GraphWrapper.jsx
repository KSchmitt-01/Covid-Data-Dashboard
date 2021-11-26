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

var options = {
  title:{
    text: "Total Vaccine Count Based on Type",
    align: 'center',
    floating: false,
    style:{
      color: '#000000'
    }
  },
  colors: ["#0000FF", "#FFA500", "#d3d3d3"],
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
  }],
}

function GraphWrapper({selection}) {
    const classes = useStyles();

  return (
    <PageContainer className={`${classes.root}`}>
        <BSUWeektoWeek/>
        <SemiDoughnut selection={selection}/>
        <PieChart selection={selection} options={options}/>
    </PageContainer>
  );
}

export default GraphWrapper;
