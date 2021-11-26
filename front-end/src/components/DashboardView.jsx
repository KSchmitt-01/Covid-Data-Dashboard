import React, { useState }  from 'react';
import DashboardHeader from './header/DashboardHeader'
import PageContainer from './PageContainer';
import GraphWrapper from './graphs/GraphWrapper'

function DashboardView() {
 const [schoolSelection, setSchoolSelection] = useState('Boise State University');


 return (
    <PageContainer className="flex-wrap space-around">
        <DashboardHeader updateSchool={setSchoolSelection}/>
        <GraphWrapper selection={schoolSelection}/>
    </PageContainer>
  );
}

export default DashboardView;