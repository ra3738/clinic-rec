import axios from '../axiosInstance';


export const GET_CLINICS = 'GET_CLINICS';
export const RECEIVE_CLINICS = 'RECEIVE_CLINICS';
export const REQUEST_CLINICS = 'REQUEST_CLINICS';
export const INVALIDATE_CLINICS = 'INVALIDATE_CLINICS';

export const requestClinics = () => ({
  type: REQUEST_CLINICS
});

export const receiveClinics = response => ({
  type: RECEIVE_CLINICS,
  payload: response.data,
});

export const invalidateClinics= () => ({
    type: INVALIDATE_CLINICS
})


export const getClinics = async (dispatch, cityName) => {

  dispatch(requestClinics(dispatch));

  axios.get(`/api/clinic/getClinicDetailsInCity/${cityName}`)
    .then(
      response => {
        dispatch(receiveClinics(response));
      },
      error => {
        console.log(`Error fetching clinics for city:${cityName}`, error);
        dispatch(invalidateClinics());
      },
    );
};
