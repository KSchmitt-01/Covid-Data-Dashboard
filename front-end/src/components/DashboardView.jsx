import React, { useState }  from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardHeader from './header/DashboardHeader'
import ContentWrapper from './ContentWrapper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const theme = createTheme({
  palette: {
    mode: 'light', //we can control light and dark theme by changing this
  },
});

function DashboardView() {
 const [schoolSelection, setSchoolSelection] = useState('Boise State University');
  return (
    <ThemeProvider theme={theme}>
      <DashboardHeader updateSchool={setSchoolSelection} theme={theme}/>
      <Box component="main"
          sx={{
            backgroundColor: theme.palette.background.default,
            flexGrow: 1,
            marginTop: '128px',
            paddingTop: '50px'
          }}>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }} style={{marginTop: 0}}>
          <ContentWrapper schoolSelection={schoolSelection} theme={theme}/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default DashboardView;