import React, { useState }  from 'react';
import DashboardHeader from './header/DashboardHeader'
import PageContainer from './PageContainer';
import ContentWrapper from './ContentWrapper'

function DashboardView() {
 const [schoolSelection, setSchoolSelection] = useState('Boise State University');

 return (
    <PageContainer className="space-around">
        <DashboardHeader updateSchool={setSchoolSelection}/>
        <ContentWrapper schoolSelection={schoolSelection}/>
    </PageContainer>
  );
}

export default DashboardView;