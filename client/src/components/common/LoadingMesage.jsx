import React from 'react';
import { Grid } from '@material-ui/core';
import LoadingSpinner from './LoadingSpinner';
import TextResponse from './TextResponse';

const LoadingMessage = props => {
  const { heading, body } = props;

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      <LoadingSpinner />
      <TextResponse heading={heading} body={body} />
      <LoadingSpinner />
    </Grid>

  );
};

export default LoadingMessage;
