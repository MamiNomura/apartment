import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchEmployees } from '../actions';
import PresentEmployeeList from './present_employee_list';
import AbsentEmployeeList from './absent_employee_list';
import EmployeeModal from './employee_modal';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }


  render() {
    return (
      <div>

        <div className="employeeListButtonGroup">
          <Link to="/groups" className="btn btn-info employeeButtonItem">
            Create Group
          </Link>
          <EmployeeModal />
         </div>
          <div className="col-md-6">
          <PresentEmployeeList />
          </div>
          <div className="col-md-6">
          <AbsentEmployeeList />
          </div>
      </div>
    );
  }
}


export default connect(null, { fetchEmployees })(EmployeeList);
