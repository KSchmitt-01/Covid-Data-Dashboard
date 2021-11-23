import React, { useState }  from 'react';
import DashboardHeader from './header/DashboardHeader'
import PageContainer from './PageContainer';
import GraphWrapper from './graphs/GraphWrapper'
import BasicCardWrapper from './cards/BasicCardWrapper';

function Test({schoolSelection}) {
 return (
    <PageContainer className="float">
        <div>
        <BasicCardWrapper/>
        <GraphWrapper selection={schoolSelection}/>
        </div>
    </PageContainer>
  );
}

export default Test;