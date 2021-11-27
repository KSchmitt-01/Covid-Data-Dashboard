import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageContainer from '../PageContainer';
import SemiDoughnut from './SemiDoughnut'
import LineChart from './LineChart'


const useStyles = makeStyles({
  root: { paddingTop: '200px' }
});


function GraphWrapper({selection}) {
  const classes = useStyles();

  return (
    <PageContainer className={`${classes.root}`}>
        <LineChart selection={selection}/>
        <SemiDoughnut selection={selection}/>
    </PageContainer>
  );
}

export default GraphWrapper;
