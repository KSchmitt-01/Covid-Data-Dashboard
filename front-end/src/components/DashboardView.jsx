import React, { useState }  from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardHeader from './header/DashboardHeader'
import ContentWrapper from './ContentWrapper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Footer from './footer/Footer';

function DashboardView() {
 const [schoolSelection, setSchoolSelection] = useState('Boise State University');
 const [isDarkMode, setIsDarkMode] = useState(false);
 const theme = createTheme({
  palette: {
    mode: isDarkMode? 'dark': 'light', //we can control light and dark theme by changing this
  },
});

  return (
    <ThemeProvider theme={theme}>
      <DashboardHeader updateSchool={setSchoolSelection} updateDarkMode={setIsDarkMode} mode={isDarkMode} theme={theme}/>
      <Box component="main"
          sx={{
            backgroundColor: theme.palette.background.default,
            flexGrow: 1,
            marginTop: '108px',
            paddingBottom: '150px',
            paddingTop: '50px'
          }}>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }} style={{marginTop: 0}}>
          <ContentWrapper schoolSelection={schoolSelection} theme={theme}/>
        </Container>
      </Box>
      <Footer mode={isDarkMode}/>
    </ThemeProvider>
  );
}

export default DashboardView;