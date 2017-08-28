import React, { Component } from 'react';

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  onSelect(id) {
    const { onSelectEmployee } = this.props;
    onSelectEmployee(id);
    this.setState({ selected: false });
  }
  render() {
    const { employee, onSelectEmployee } = this.props;
    if (!employee) {
      return <div>Loading..</div>;
    }

    return (
      <div className="media" onClick={() => onSelectEmployee(employee._id.$oid)}>
        <div className="media-body">
          <h6 className="media-heading">{employee.name}</h6>
          <div><small>Dept: {employee.department}</small></div>
          <div><small><i>Hired on: {employee.hired_date}</i></small></div>
        </div>
      </div>
    );
  }
}

export default Employee;
