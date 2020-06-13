import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  ttFirst: {
    marginTop: '20px',
    color: theme.palette.primary.main,
  },
  ttLast: {
    margin: '20px',
    color: theme.palette.primary.main,
  },
}));

const TextResponse = props => {
  const { heading, body } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      elevation={0}
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Typography variant='h4' align='left' className={classes.ttFirst}>
        {heading}
      </Typography>
      <Typography variant='h6' align='left' className={classes.ttLast}>
        {body}
      </Typography>
    </Grid>
  );
};

export default TextResponse;
