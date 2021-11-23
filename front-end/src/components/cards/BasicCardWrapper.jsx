import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageContainer from '../PageContainer';
import BasicCard from './BasicCard';


const useStyles = makeStyles({
  root: {
       marginTop: '200px',
       height: '200px',
       padding: '50px',
       backgroundColor: '#ECEFF1',
    }
});


function BasicCardWrapper() {
    const classes = useStyles();

  return (
    <PageContainer className={`${classes.root}`}>
        <BasicCard value={702} description={"A sample description"}/>
        <BasicCard value={12} description={"A sample description"}/>
        <BasicCard value={1} description={"A sample description"}/>
        <BasicCard value={1002} description={"A sample description"}/>
    </PageContainer>
  );
}

export default BasicCardWrapper;
