/* eslint-disable no-var */
import React from 'react';
import { Grid, ListItem, List, ListItemText, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import TextResponse from './common/TextResponse';

import LoadingMessage from './common/LoadingMesage';
import { getUsers, getAvgRating } from '../redux/actions/userActions';

const UserViewer = () => {
  const usersState = useSelector(state => state.users);
  const patientState = useSelector(state => state.patient);
  const dispatch = useDispatch();

  if (!usersState.isFetchingUsers && usersState.responseData === null) {
    if (!usersState) {
      return <TextResponse heading='No users found.' body='Please contact administrator' />;
    }
    getUsers(dispatch, patientState.id);
    return <LoadingMessage heading='Please wait' body='Loading users...' />;
  }

  if (!usersState.isFetchingAvgRating && usersState.avgRating === null) {
    if (!usersState) {
      return <TextResponse heading='No users found.' body='Please contact administrator' />;
    }
    getAvgRating(dispatch, patientState.id);

    return <LoadingMessage heading='Please wait' body='Loading users...' />;
  }

  if (usersState.didInvalidateUsers) {
    return <TextResponse heading='Error getting users info from server' body='Please contact administrator.' />;
  }

  if (usersState.didInvalidateAvgRating) {
    return <TextResponse heading='Error getting users info from server' body='Please contact administrator.' />;
  }

  if (usersState.isFetchingUsers) {
    return <LoadingMessage heading='Please wait' body='Loading users...' />;
  }

  if (usersState.isFetchingAvgRating) {
    return <LoadingMessage heading='Please wait' body='Loading users...' />;
  }

  return (
    <div>
      <Grid container spacing={3} alignContent='center'>
        <Grid item xs={12}>
          <TextResponse heading='Bill History' />
          {usersState.avgRating !== null
           && (<TextResponse body={`Your average medical bill: ${usersState.avgRating[0].amount}`} />)}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          { usersState.responseData !== null && (
          <List>
            {usersState.responseData.map(user => (
              <>
                <ListItem button key={`${user.bill_id}`}>
                  <ListItemText key={`${user.bill_id}`} primary={`Bill id: ${user.bill_id} | Amount: ${user.amount} | Overdue charge: ${user.overdue_charge} | Due date: ${user.due_date.slice(0, 10)} | Paid date: ${user.paid_date.slice(0, 10)}`} />
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
