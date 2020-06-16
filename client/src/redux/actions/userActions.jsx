import axios from '../axiosInstance';

export const GET_USERS = 'GET_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_USERS = 'REQUEST_USERS';
export const INVALIDATE_USERS = 'INVALIDATE_USERS';

export const requestUsers = () => ({
  type: REQUEST_USERS
});

export const receiveUsers = response => ({
  type: RECEIVE_USERS,
  payload: response.data,
});

export const invalidateUsers= () => ({
    type: INVALIDATE_USERS
})

export const getUsers = async (dispatch, patientid) => {
  dispatch(requestUsers(dispatch));

  axios.get(`/api/users/getAvgUserBill/${patientid}`)
    .then(
      response => {
        dispatch(receiveUsers(response));
      },
      error => {
        console.log(`Error fetching bills for :${patientid}`, error);
        dispatch(invalidateUsers());
      },
    );
}; 