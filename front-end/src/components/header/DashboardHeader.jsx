import React from 'react';
import { AppBar, Switch } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SchoolComboBox from './SchoolComboBox'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function DashboardHeader({updateSchool, updateDarkMode, mode, theme}) {
    const useStyles = makeStyles({
        root: {
          marginBottom: 'auto',
        }
      });
    const handleModeChange = () =>{
      updateDarkMode(!mode);
    };
    const classes = useStyles()

    return (
      <Box sx={{ display: 'fixed', height:'5px'}}>
        <AppBar className={classes.root} color="primary" position="absolute">
            <Typography variant="h3" color="white" fontWeight="bold">
              COVID-19 DATA DASHBOARD
            </Typography>
            <SchoolComboBox updateSelection={updateSchool} iTheme={theme}/>
            <FormGroup>
              <FormControlLabel control={<Switch name="toggleDark" checked={mode} onChange={handleModeChange}/>} label="Dark Mode" sx={{color: theme.palette.text.primary, marginLeft: '100px'}}/>
            </FormGroup>
        </AppBar>
      </Box>
    )
}


export default DashboardHeader;