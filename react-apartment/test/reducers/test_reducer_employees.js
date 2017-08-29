import ReducerEmployees from '../../src/reducers/reducer_employees';
import { renderComponent , expect } from '../test_helper';
import { FETCH_EMPLOYEES } from '../../src/actions/types';

describe('ReducerEmployees ', () => {
  it ('should handles bogus action', () => {
    // Arrange
    const action = { type: 'foo', payload: {} };
    const state = {
      123: { name: 'foo', _id$oid: 123 }
    }
    // Act
    const newState = ReducerEmployees(state, action);
    // Assert
    expect(newState).to.eql(state);
  });


  it ('should create employees object with id as key', () => {
    // Arrange
    const person = { _id: { $oid: '59a3bb406e7a1c8d01cb65ea' },
      name: 'Adam Campbell',
      department: 'Marketing',
      hired_date: '2014-10-27'
    };
    const data = { data: [person] };
    const action = { type: FETCH_EMPLOYEES, payload: data };
    // Act
    const newState = ReducerEmployees(null, action);
    // Assert
    expect(newState).to.be.a('object');
    expect(newState).to.have.property('59a3bb406e7a1c8d01cb65ea');
    expect(newState['59a3bb406e7a1c8d01cb65ea']).to.eql(person);
  });
});
