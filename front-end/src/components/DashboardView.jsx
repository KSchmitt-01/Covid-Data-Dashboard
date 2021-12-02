import React, { useState }  from 'react';
import DashboardHeader from './header/DashboardHeader'
import PageContainer from './PageContainer';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import LineChart from './graphs/LineChart';
import SemiDoughnut from './graphs/SemiDoughnut';
import PieChart from './graphs/PieChart';
import BasicCardWrapper from './cards/BasicCardWrapper';
import BarChart from './graphs/BarChart';

function DashboardView() {
 const [schoolSelection, setSchoolSelection] = useState('Boise State University');
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
    <PageContainer className="space-around">
      <DashboardHeader updateSchool={setSchoolSelection}/>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }} style={{marginTop: 175}}>
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
      </Container>
    </PageContainer>
  );
}

export default DashboardView;