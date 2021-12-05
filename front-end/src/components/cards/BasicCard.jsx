import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

const useStyles = makeStyles({
  root: {
    margin: '5px 25px',
    justifyContent: 'center',
    textAlign: 'center'
  },
  content: {
    paddingTop: '20px'
  }
});

export default function BasicCard({value, description}) {
  const classes = useStyles();
  return (
    <Box  sx={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      <Card variant={'outlined'} className={`${classes.root}`} sx={{ width: 225, height: 175}}>
        <CardContent className={`${classes.content}`} style={{paddingTop: '50px'}}>
            <Typography variant="h3">
              {value}
            </Typography>
            <Typography variant="body3">
              {description}
            </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}