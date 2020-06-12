import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../constants/colors';

const useStyles = makeStyles(() => ({
  bar: {
    backgroundColor: colors.white,
  },
  title: {
    padding: '25px 5px',
    textTransform: 'uppercase',
    flexGrow: 1,
    color: colors.darkBlue,
  },
}));

const HeaderStatic = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position='static' className={classes.bar}>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            Clinic Recommender
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderStatic;
