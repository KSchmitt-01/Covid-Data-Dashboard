import React, { useState }  from 'react';
import PageContainer from './PageContainer';
import GraphWrapper from './graphs/GraphWrapper'
import BasicCardWrapper from './cards/BasicCardWrapper';

function ContentWrapper({schoolSelection}) {
 return (
    <PageContainer className="float">
        <div>
          <BasicCardWrapper selection={schoolSelection}/>
          <GraphWrapper selection={schoolSelection}/>
        </div>
    </PageContainer>
  );
}

export default ContentWrapper;