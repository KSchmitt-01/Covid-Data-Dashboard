import React from 'react';
import Grid from '@material-ui/core/Grid'
import LineChart from './graphs/LineChart';
import SemiDoughnut from './graphs/SemiDoughnut';
import PieChart from './graphs/PieChart';
import BarChart from './graphs/BarChart';
import BasicCardWrapper from './cards/BasicCardWrapper';
import BottomCardWrapper from './cards/BottomCardWrapper';
import VaccinationTableTotal from './table/VaccinationTableTotal';

function ContentWrapper({schoolSelection, theme}) {
 return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <BasicCardWrapper selection={schoolSelection} />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <LineChart selection={schoolSelection} innerTheme={theme}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SemiDoughnut selection={schoolSelection} innerTheme={theme}/>
        <PieChart selection={schoolSelection} innerTheme={theme}/>
      </Grid> 
      <Grid item xs={12} md={5} lg={4}>
        <VaccinationTableTotal  selection={schoolSelection} innerTheme={theme}/>
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <BarChart selection={schoolSelection} innerTheme={theme}/>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <BottomCardWrapper selection={schoolSelection} />
      </Grid>
    </Grid>
  );
}

export default ContentWrapper;