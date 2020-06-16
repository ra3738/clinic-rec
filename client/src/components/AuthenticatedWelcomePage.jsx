import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Grid, Button } from '@material-ui/core';
import TextResponse from './common/TextResponse';

const AuthenticatedWelcomePage = () => {
    const history = createHistory({forceRefresh:true}); 
    return ( 
    <Grid container>
        <Grid item xs={12}>
            <TextResponse heading='Welcome to clinic recommender' body='Here are a few things you can do: '/>
        </Grid> 
      <Grid item xs={6}>
        <Button variant='contained' color='primary' onClick={()=> history.push('/clinics')}> Find clinics near you </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant='contained' color='primary' onClick={()=> history.push('/doctors')}> Find doctor ratings </Button>
      </Grid>
    </Grid> );
}
 
export default AuthenticatedWelcomePage;