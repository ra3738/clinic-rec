import { combineReducers } from 'redux';
import patientReducer from './patientReducer';
import clinicReducer from './clinicReducer';

const rootReducer = combineReducers({
  patients: patientReducer,
  clinics: clinicReducer
});

export default rootReducer;
