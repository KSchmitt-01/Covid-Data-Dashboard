import React, { useState }  from 'react';
import DashboardHeader from './header/DashboardHeader'
import PageContainer from './PageContainer';
import GraphWrapper from './graphs/GraphWrapper'
import BasicCardWrapper from './cards/BasicCardWrapper';
import Test from './test'

function DashboardView() {
 const [schoolSelection, setSchoolSelection] = useState('Boise State University');

 return (
    <PageContainer className="space-around">
        <DashboardHeader updateSchool={setSchoolSelection}/>
        <Test schoolSelection={schoolSelection}/>
    </PageContainer>
  );
}

export default DashboardView;