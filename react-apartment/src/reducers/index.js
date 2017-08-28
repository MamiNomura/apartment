import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import EmployeeReducer from './reducer_employees';
import AbsentEmployeeIdsReducer from './reducer_absent_employee_ids';
import GroupReducer from './reducer_groups';

const rootReducer = combineReducers({
  employees: EmployeeReducer,
  absentEmployeeIds: AbsentEmployeeIdsReducer,
  groups: GroupReducer,
  form: formReducer
});

export default rootReducer;
