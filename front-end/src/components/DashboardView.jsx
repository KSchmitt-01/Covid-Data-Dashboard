import React, { useState }  from 'react';
import DashboardHeader from './header/DashboardHeader'
import PageContainer from './PageContainer';
import ContentWrapper from './ContentWrapper'
import Container from '@material-ui/core/Container'

function DashboardView() {
 const [schoolSelection, setSchoolSelection] = useState('Boise State University');
  return (
    <PageContainer className="space-around">
      <DashboardHeader updateSchool={setSchoolSelection}/>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }} style={{marginTop: 175}}>
        <ContentWrapper schoolSelection={schoolSelection} />
      </Container>
    </PageContainer>
  );
}

export default DashboardView;