import React from "react";
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid'
import Typography from "@mui/material/Typography";

function Footer({mode}) {
    return (
        <Box sx={{
            width: '100%',
            height: '60%',
            backgroundColor: mode?'#292929': '#1976d2',
        }}>
            <Grid container justifyContent="center" spacing={3}>
                <Grid item xs={2} md={2} lg={1}>
                    <Typography align="left" variant="h6" sx={{color: 'white', paddingLeft: '50px'}}>
                        ©2021
                    </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                    <Typography align="center" variant="h6" sx={{color: 'white'}}>
                        Created by: Andrew Haddon, Matthew Johnson, Kincaid Schmitt, Alyssa West
                    </Typography>
                </Grid>
                <Grid item xs={2} md={2} lg={3}>
                    <Typography align="right" variant="h6" sx={{color: 'white', paddingRight: '50px', verticalAlign: 'middle'}}>
                        Boise State University CS354
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;