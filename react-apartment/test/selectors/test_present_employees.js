import PresentEmployeesSelector from '../../src/selectors/present_employees';
import { renderComponent , expect } from '../test_helper';

describe('PresentEmployeesSelector', () => {

  it('should return present employees (whose id is not in absentEmployeeIds list)', () => {
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
    const presentEmployees = [
      { _id: { $oid: 1 }, name: "foo1" },
      { _id: { $oid: 3 }, name: "foo3" }
    ];
    // Act
    const selected = PresentEmployeesSelector(state);
    // Assert
    expect(selected).to.be.an('array');
    expect(selected).to.eql(presentEmployees);
  });
});
