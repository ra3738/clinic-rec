import React from 'react';
import { Button, Grid, ListItem, List, ListItemText, Divider, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import TextResponse from './common/TextResponse';
import LoadingMessage from './common/LoadingMesage';
import { getClinics } from '../redux/actions/clinicActions';

const ClinicViewer = () => {
  const clinicsState = useSelector(state => state.clinics);
  const dispatch = useDispatch();
  const [cityName, setCityName] = React.useState('');
  const getClinicsOnClick = () => {
    if (!clinicsState.isFetchingClinics) {
      if (!clinicsState) {
        return <TextResponse heading='No clinics found.' body='Please contact administrator' />;
      }
      getClinics(dispatch, cityName);
      setCityName('');
    }
    return <LoadingMessage heading='Please wait' body='Loading clinics...' />;
  };
  const onChangeCityName = e => {
    setCityName(e.target.value);
  };

  if (clinicsState.didInvalidateClinics) {
    return <TextResponse heading='Error getting clinics info from server' body='Please contact administrator.' />;
  }

  if (clinicsState.isFetchingClinics) {
    return <LoadingMessage heading='Please wait' body='Loading clinics...' />;
  }

  return (
    <div>
      <Grid container spacing={3} alignContent='center'>
        <Grid item xs={12}>
          <TextResponse heading='Find clinics in your city' />
        </Grid>
      </Grid>
      <Grid container spacing={3} alignContent='center'>
        <Grid item xs={12}>
          <TextField placeholder='City name' onChange={onChangeCityName} />
          <Button color='primary' onClick={getClinicsOnClick}> Search </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          { clinicsState.responseData !== null
         && (
         <List>
           {clinicsState.responseData.map(clinic => (
             <>
               <ListItem button key={`${clinic.id}`}>
                 <ListItemText
                   key={`${clinic.id}`}
                   primary={`${clinic.name} | Operating hours: ${clinic.opening_time} - ${clinic.closing_time} |
                 Days open: ${clinic.days_open} | Postal code: ${clinic.postal_code} | City: ${clinic.city} `}
                 />
               </ListItem>
               <Divider />
             </>
           ))}
         </List>
         )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ClinicViewer;
