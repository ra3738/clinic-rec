import axios from '../axiosInstance';

export const GET_USERS = 'GET_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_USERS = 'REQUEST_USERS';
export const INVALIDATE_USERS = 'INVALIDATE_USERS';
export const RECEIVE_AVG_RATING = 'RECEIVE_AVG_RATING';
export const REQUEST_AVG_RATING = 'REQUEST_AVG_RATING';
export const INVALIDATE_AVG_RATING = 'INVALIDATE_AVG_RATING';

export const requestUsers = () => ({
  type: REQUEST_USERS,
});

export const receiveUsers = response => ({
  type: RECEIVE_USERS,
  payload: response.data,
});
export const receiveAvgRating = response => ({
  type: RECEIVE_AVG_RATING,
  payload: response.data,
});

export const requestAvgRating = () => ({
  type: REQUEST_AVG_RATING,
});

export const invalidateAvgRating = () => ({
  type: INVALIDATE_AVG_RATING,
});

export const invalidateUsers = () => ({
  type: INVALIDATE_USERS,
});

export const getUsers = async (dispatch, patientid) => {
  dispatch(requestUsers(dispatch));

  axios.get(`/api/bill/getBills/${patientid}`)
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

export const getAvgRating = async (dispatch, patientid) => {
  dispatch(requestAvgRating(dispatch));

  axios.get(`/api/bill/avgBillForPatient/${patientid}`)
    .then(
      response => {
        dispatch(receiveAvgRating(response));
      },
      error => {
        console.log(`Error fetching bills for :${patientid}`, error);
        dispatch(invalidateAvgRating());
      },
    );
};
