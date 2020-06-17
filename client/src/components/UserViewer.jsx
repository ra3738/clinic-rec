import React from 'react';
import { Button, Grid, ListItem, List, ListItemText, Divider, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import TextResponse from './common/TextResponse';

import LoadingMessage from './common/LoadingMesage';
import { getUsers } from '../redux/actions/userActions';

const UserViewer = () => {
  const usersState = useSelector(state => state.users);
  const patientState = useSelector(state => state.patient)
  const dispatch = useDispatch();

  if (!usersState.isFetchingUsers && usersState.responseData === null) {
    if (!usersState) {
      return <TextResponse heading='No users found.' body='Please contact administrator' />;
    }
    getUsers(dispatch, patientState.id);
    return <LoadingMessage heading='Please wait' body='Loading users...' />;
  }

  if (usersState.didInvalidateUsers) {
    return <TextResponse heading='Error getting users info from server' body='Please contact administrator.' />;
  }

  if (usersState.isFetchingUsers) {
    return <LoadingMessage heading='Please wait' body='Loading users...' />;
  }

  return (
    <div>
      <Grid container spacing={3} alignContent='center'>
        <Grid item xs={12}>
          <TextResponse heading='Bill History' />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          { usersState.responseData !== null && (
          <List>
            {usersState.responseData.map(user => (
              <>
                <ListItem button key={`${user.bill_id}`}>
                  <ListItemText key={`${user.bill_id}`} primary={`${user.bill_id} | Amount: ${user.amount}`} />
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

export default UserViewer;
