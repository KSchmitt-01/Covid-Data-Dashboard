import React from 'react';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import { AppBar } from '@mui/material';
import SchoolComboBox from './SchoolComboBox'


function DashboardHeader(props) {
    return (
        <AppBar color="primary">
            <h1>COVID-19 DATA DASHBOARD</h1>
            <SchoolComboBox/>

            {/* <List component="nav">
                <ListItem component="div">
                    <ListItemText inset>
                        <h4>Home</h4>
                    </ListItemText>
                </ListItem >
            </List> */}
        </AppBar>
    )
}


export default DashboardHeader;