
import { INVALIDATE_CLINICS, REQUEST_CLINICS, RECEIVE_CLINICS } from '../actions/clinicActions';

const initialState = {
  isFetchingClinics: false,
  didInvalidateClinics: false,
  responseData: null 
};

const clinicReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INVALIDATE_CLINICS:
      return { ...state, didInvalidateClinics: true };
    case REQUEST_CLINICS:
      return { ...state, isFetchingClinics: true, didInvalidateClinics: false };
    case RECEIVE_CLINICS:
      return {
        ...state,
        isFetchingClinics: false,
        didInvalidateClinics: false,
        responseData: payload
      };
    default:
      return state;
  }
};

export default clinicReducer;