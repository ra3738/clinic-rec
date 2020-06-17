import { INVALIDATE_USERS, REQUEST_USERS, RECEIVE_USERS, INVALIDATE_AVG_RATING, REQUEST_AVG_RATING, RECEIVE_AVG_RATING } from '../actions/userActions';

const initialState = {
  isFetchingUsers: false,
  didInvalidateUsers: false,
  isFetchingAvgRating: false,
  didInvalidateAvgRating: false,
  responseData: null,
  avgRating: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INVALIDATE_USERS:
      return { ...state, didInvalidateUsers: true };
    case REQUEST_USERS:
      return { ...state, isFetchingUsers: true, didInvalidateUsers: false };
    case RECEIVE_USERS:
      return {
        ...state,
        isFetchingUsers: false,
        didInvalidateUsers: false,
        responseData: payload,
      };
    case INVALIDATE_AVG_RATING:
      return { ...state, didInvalidateAvgRating: true };
    case REQUEST_AVG_RATING:
      return { ...state, isFetchingAvgRating: true, didInvalidateUsers: false };
    case RECEIVE_AVG_RATING:
      return {
        ...state,
        isFetchingAvgRating: false,
        didInvalidateAvgRating: false,
        avgRating: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
