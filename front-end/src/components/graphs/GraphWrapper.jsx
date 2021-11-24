import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageContainer from '../PageContainer';
import SemiDoughnut from './SemiDoughnut'
import BSUWeektoWeek from './BSUWeektoWeek'


const useStyles = makeStyles({
  root: { paddingTop: '200px' },
  buttonGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
});


function GraphWrapper({selection}) {
    const classes = useStyles();

  return (
    <PageContainer className={`${classes.root}`}>
        <BSUWeektoWeek selection={selection}/>
        <SemiDoughnut selection={selection}/>
    </PageContainer>
  );
}

export default GraphWrapper;
