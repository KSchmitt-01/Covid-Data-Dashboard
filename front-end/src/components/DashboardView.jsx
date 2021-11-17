import React from 'react';
import DashboardHeader from './header/DashboardHeader'
import Welcome from './Welcome'
import SemiDoughnut from './graphs/SemiDoughnut';
import PageContainer from './PageContainer';

function DashboardView() {
 //javascript logic goes here
  return (
    <PageContainer className="flex-container space-around">
        <DashboardHeader/>
        <Welcome/>
        <SemiDoughnut/>
    </PageContainer>
  );
}

export default DashboardView;