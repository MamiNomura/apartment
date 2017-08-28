import _ from 'lodash';
import { SELECT_ABSENT_EMPLOYEES, DESELECT_ABSENT_EMPLOYEES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_ABSENT_EMPLOYEES:
      return [...state, action.payload];
    case DESELECT_ABSENT_EMPLOYEES:
      return _.without(state, action.payload);
    default:
      return state;
  }
};
