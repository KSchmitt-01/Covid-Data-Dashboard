import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageContainer from '../PageContainer';
import SemiDoughnut from './SemiDoughnut'
import BSUWeektoWeek from './BSUWeektoWeek'


const useStyles = makeStyles({
  root: { paddingTop: '200px' }
});


function GraphWrapper({selection}) {
  const classes = useStyles();

  return (
    <PageContainer className={`${classes.root}`}>
        <BSUWeektoWeek/>
        <SemiDoughnut selection={selection}/>
    </PageContainer>
  );
}

export default GraphWrapper;
