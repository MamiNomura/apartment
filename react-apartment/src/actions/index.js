import axios from 'axios';
import {
  FETCH_EMPLOYEES,
  SELECT_ABSENT_EMPLOYEES,
  DESELECT_ABSENT_EMPLOYEES,
  CREATE_GROUP,
  CREATE_EMPLOYEE
} from './types';
//import employeeData from '../employees.json';

// TODO: put this to config
const ROOT_URL = 'http://127.0.0.1:5000';

export function fetchEmployees() {
  const request = axios.get(`${ROOT_URL}/employees`);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: FETCH_EMPLOYEES,
        payload: { data: data.data }
      });
    });
  };
}

export function selectAbsentEmployees(id) {
  return {
    type: SELECT_ABSENT_EMPLOYEES,
    payload: id
  };
}

export function deSelectAbsentEmployees(id) {
  return {
    type: DESELECT_ABSENT_EMPLOYEES,
    payload: id
  };
}

export function createGroups(props) {
  const request = axios.post(`${ROOT_URL}/groups`, props);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: CREATE_GROUP,
        payload: { data: data.data.groups }
      });
    });
  };
}

export function createEmployee(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/employee`, values)
    .then(() => callback());

  return {
    type: CREATE_EMPLOYEE,
    payload: request
  };
}
