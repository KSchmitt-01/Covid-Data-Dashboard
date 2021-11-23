import React, { useState }  from 'react';
import PageContainer from './PageContainer';
import GraphWrapper from './graphs/GraphWrapper'
import BasicCardWrapper from './cards/BasicCardWrapper';

function ContentWrapper({schoolSelection}) {
 return (
    <PageContainer className="float">
        <div>
        <BasicCardWrapper/>
        <GraphWrapper selection={schoolSelection}/>
        </div>
    </PageContainer>
  );
}

export default ContentWrapper;