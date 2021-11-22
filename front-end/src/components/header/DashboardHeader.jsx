import React from 'react';
import { AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SchoolComboBox from './SchoolComboBox'


function DashboardHeader({updateSchool}) {
    const useStyles = makeStyles({
        root: {
          marginBottom: 'auto',
        },
      });
    const classes = useStyles()

    return (
        <AppBar className={classes.root} color="primary">
            <h1>COVID-19 DATA DASHBOARD</h1>
            <SchoolComboBox updateSelection={updateSchool}/>
        </AppBar>
    )
}


export default DashboardHeader;