import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    paddingLeft: '20px',
    margin: '0 5% 0 5%',
    height: '100%',
  },
});

function PageContainer({ className, children, ...rest }) {
  const classes = useStyles();
  const additionalClass = (className) || '';
  return (
    <div className={`${classes.root} ${additionalClass}`} {...rest}>
      {children}
    </div>
  );
}

export default PageContainer;
