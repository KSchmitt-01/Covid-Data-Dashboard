import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageContainer from '../PageContainer';
import BasicCard from './BasicCard';


const useStyles = makeStyles({
  root: {
       marginTop: '200px',
       padding: '50px',
       backgroundColor: '#ECEFF1',
    }
});


function BasicCardWrapper() {
    const classes = useStyles();

  return (
    <PageContainer className={`${classes.root}`}>
        <BasicCard />
    </PageContainer>
  );
}

export default BasicCardWrapper;
