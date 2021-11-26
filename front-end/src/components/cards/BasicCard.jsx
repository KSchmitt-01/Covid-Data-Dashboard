import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    margin: '15px 25px',
    justifyContent: 'center',
    textAlign: 'center'
  },
  content: {
    paddingTop: '50px'
  }
});

export default function BasicCard({value, description}) {
  const classes = useStyles();
  return (
    <Card className={`${classes.root}`} sx={{ width: 225, height: 175}}>
      <CardContent className={`${classes.content}`} style={{paddingTop: '50px'}}>
          <Typography variant="h4">
            {value}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
      </CardContent>
    </Card>
  );
}