import { combineReducers } from 'redux';
import patientReducer from './patientReducer';
import clinicReducer from './clinicReducer';
import doctorReducer from './doctorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  patients: patientReducer,
  clinics: clinicReducer,
  doctors: doctorReducer,
  users: userReducer
});

export default rootReducer;
