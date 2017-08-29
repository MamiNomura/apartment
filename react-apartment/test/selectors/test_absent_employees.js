import AbsentEmployeesSelector from '../../src/selectors/absent_employees';
import { renderComponent , expect } from '../test_helper';

describe('AbsentEmployeesSelector', () => {

  it('should return employees whose ids are in absentEmployeeIds', () => {
    // Arrange
    const employees = {
      1: { _id: { $oid: 1 }, name: "foo1" },
      2: { _id: { $oid: 2 }, name: "foo2" },
      3: { _id: { $oid: 3 }, name: "foo3" }
    };
    const state = {
      absentEmployeeIds: [2],
      employees: employees
    };
    const absentEmployees = [
      { _id: { $oid: 2 }, name: "foo2" }
    ];
    // Act
    const selected = AbsentEmployeesSelector(state);
    // Assert
    console.log(selected)
    expect(selected).to.be.an('array');
    expect(selected).to.eql(absentEmployees);
  });
});
