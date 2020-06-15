import React, { Component } from 'react';
import {Button, Paper, Grid, Typography, InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextResponse from './common/TextResponse';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import LoadingMessage from './common/LoadingMesage';
import { getClinics } from '../redux/actions/clinicActions';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
    searchBox: {
       align: 'center'
    }
  }));

const ClinicViewer = () => {
    const classes = useStyles(); 
    const clinicsState = useSelector(state => state.clinics); 
    const dispatch  = useDispatch(); 
     console.log('here');
     console.log(clinicsState)
const getClinicsOnClick = () => {
    if (clinicsState.responseData === [] && !clinicsState.isFetchingClinics) {
    if (!clinicsState) {
      return <TextResponse heading='No user found.' body='Please contact administrator' />;
    }
    getClinics(dispatch, 'Vancouver');
    console.log('call getClinics')
    console.log(clinicsState);
    return <LoadingMessage heading='Please wait' body='Loading clinics...' />;
  }
}

 if (clinicsState.didInvalidateClinics) {
    return <TextResponse heading='Error getting user info from server' body='Please contact administrator.' />;
  }
  if (clinicsState.isFetchingClinics) {
    return <LoadingMessage heading='Please wait' body='Loading patient...' />;
  }

    return (
        <div>
      <Grid container spacing={3} alignContent='center'>
        <Grid item xs={12} >
          <TextResponse heading="Find clinics in your city"/>
        </Grid>
        </Grid> 
       <Grid container spacing={3} alignContent='center'>
        <Grid item xs={12}>
          <TextField placeholder='City name'></TextField>
          <Button color='primary' onClick ={getClinicsOnClick}> Search </Button> 
          <h1> Res data: {clinicsState.responseData} </h1>
        </Grid>
      </Grid>
    </div>
    );
}
 
export default ClinicViewer;