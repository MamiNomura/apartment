import _ from 'lodash';
import { FETCH_EMPLOYEES } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return _.mapKeys(action.payload.data, '_id.$oid');
    default:
      return state;
  }
}
