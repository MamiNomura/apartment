import React, { Component } from 'react';

import { connect } from 'react-redux';
import PresentEmployeesSelector from '../selectors/present_employees';
import Employee from './employee';
import { selectAbsentEmployees } from '../actions';

// Contains a list of employees that we are going to create group from
class PresentEmployeeList extends Component {

  onSelectEmployees(id) {
    this.props.selectAbsentEmployees(id);
  }

  renderEmployees() {
    return _.map(this.props.employees, person => {
      return (
        <li className="list-group-item" key={person._id.$oid}>
          <Employee employee={person} onSelectEmployee={this.onSelectEmployees.bind(this)} />
        </li>
      );
    });
  }

  render() {
    return (
      <div className="employeeList">
        <h3>Present Employees</h3>
          <h6 className="text-default">
            Select employees who are absent today...
          </h6>
        <ul className="list-group">
          {this.renderEmployees()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: PresentEmployeesSelector(state)
  };
};

export default connect(mapStateToProps, { selectAbsentEmployees })(PresentEmployeeList);
