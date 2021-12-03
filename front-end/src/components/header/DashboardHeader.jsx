import React from 'react';
import { AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SchoolComboBox from './SchoolComboBox'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function DashboardHeader({updateSchool,theme}) {
    const useStyles = makeStyles({
        root: {
          marginBottom: 'auto',
        }
      });
    const classes = useStyles()

    return (
      <Box sx={{ display: 'flex', height:'5px'}}>
        <AppBar className={classes.root} color="primary" position="absolute">
            <Typography variant="h3" color="white" fontWeight="bold">
              COVID-19 DATA DASHBOARD
            </Typography>
            <SchoolComboBox updateSelection={updateSchool} iTheme={theme}/>
        </AppBar>
      </Box>
    )
}


export default DashboardHeader;