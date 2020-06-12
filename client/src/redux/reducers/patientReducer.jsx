import { CREATE_PATIENT, INVALIDATE_PATIENT, REQUEST_PATIENT, RECEIVE_PATIENT } from '../actions/patientActions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  id: null,
  username: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INVALIDATE_PATIENT:
      return { ...state, didInvalidate: true };
    case REQUEST_PATIENT:
      return { ...state, isFetching: true, didInvalidate: false };
    case RECEIVE_PATIENT:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        id: payload._id,
        username: payload.username,
      };
    case CREATE_PATIENT:
      return {
        id: payload._id,
        username: payload.username,
      };
    default:
      return state;
  }
};

export default userReducer;
