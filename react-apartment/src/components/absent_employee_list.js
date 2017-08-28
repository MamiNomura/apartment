import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import AbsentEmployeesSelector from '../selectors/absent_employees';
import Employee from './employee';
import { deSelectAbsentEmployees } from '../actions';

class AbsentEmployeeList extends Component {
  onSelectEmployees(id) {
    this.props.deSelectAbsentEmployees(id);
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
    const title = _.size(this.props.employees) > 0 ? 'Select back if person is actually here!' : '';
    return (
      <div className="employeeList">
        <h3>Absent Employees</h3>
        <h6>{title}</h6>
        <ul className="list-group">
          {this.renderEmployees()}
        </ul>
    </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    employees: AbsentEmployeesSelector(state)
  };
};

export default connect(mapStateToProps, { deSelectAbsentEmployees })(AbsentEmployeeList);
