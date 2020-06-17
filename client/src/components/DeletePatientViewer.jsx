import React from 'react';
import { Button, Grid, ListItem, List, ListItemText, Divider, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import TextResponse from './common/TextResponse';
import LoadingMessage from './common/LoadingMesage';
import { deleteAccount } from '../redux/actions/userActions';

const AccountViewer = () => {
  const accountsState = useSelector(state => state.accounts);
  const patientState = useSelector(state => state.patient)
  const dispatch = useDispatch();

  if (!accountsState.isFetchingUsers && accountsState.responseData === null) {
    if (!accountsState) {
      return <TextResponse heading='No users found.' body='Please contact administrator' />;
    }
    deleteAccount(dispatch, patientState.id);
    return <LoadingMessage heading='Please wait' body='Loading users...' />;
  }

  if (accountsState.didInvalidateAllStars) {
    return <TextResponse heading='Error getting all star accounts info from server' body='Please contact administrator.' />;
  }

  if (accountsState.isFetchingAllStars) {
    return <LoadingMessage heading='Please wait' body='Loading all star accounts...' />;
  };
};

export default AccountViewer;
