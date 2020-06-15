import React, { Component } from 'react';
import {Button, Paper, Grid, Typography, InputBase, ListItem, List, ListItemText, Divider} from '@material-ui/core';
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
    const [cityName, setCityName] = React.useState('');
     console.log('here');
     console.log(clinicsState)
    const getClinicsOnClick = () => {
        if (!clinicsState.isFetchingClinics) {
        if (!clinicsState) {
            return <TextResponse heading='No clinics found.' body='Please contact administrator' />;
        }
        getClinics(dispatch, cityName);
        // console.log('call getClinics')
        // console.log(clinicsState);
        return <LoadingMessage heading='Please wait' body='Loading clinics...' />;
        console.log('button clicked')
      }
  }
  const onChangeCityName = (e) => {
      setCityName(e.target.value)
  }


 if (clinicsState.didInvalidateClinics) {
    return <TextResponse heading='Error getting user info from server' body='Please contact administrator.' />;
  }
  if (clinicsState.isFetchingClinics) {
    return <LoadingMessage heading='Please wait' body='Loading clinics...' />;
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
          <TextField placeholder='City name' onChange={onChangeCityName} ></TextField>
          <Button color='primary' onClick={getClinicsOnClick}> Search </Button> 
        </Grid>
      </Grid>
      <Grid container spacing={3}> 
       <Grid item xs={12}>
         <List> 
          {clinicsState.responseData.map((clinic) => (
            <>
             <ListItem button key={`${clinic.id}`}>
                <ListItemText key={`${clinic.id}`} primary={`${clinic.name} | Operating hours: ${clinic.opening_time} - ${clinic.closing_time} |
                 Days open: ${clinic.days_open} | Postal code: ${clinic.postal_code} | City: ${clinic.city} `} />
             </ListItem>
             <Divider/>
             </>
          ))}
          </List> 
       </Grid>
      </Grid> 
    </div>
    );
}
 
export default ClinicViewer;