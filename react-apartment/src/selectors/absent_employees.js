// Reselect selector
// Takes a list of employees and absent employee ids and
// pick out the absent employees

import _ from 'lodash';
import { createSelector } from 'reselect';

const employeesSelector = state => state.employees;
const absentEmployeesSelector = state => state.absentEmployeeIds;

const getEmployees = (employees, absentEmployeeIds) => {
  const selectedPerson = _.filter(
    employees,
    employee => _.contains(absentEmployeeIds, employee._id.$oid)
  );
  return selectedPerson;
};

export default createSelector(
  employeesSelector,
  absentEmployeesSelector,
  getEmployees
);
