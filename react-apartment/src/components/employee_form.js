import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createEmployee } from '../actions';

class EmployeeForm extends Component {
  onSubmit(values) {
    // close modal
    this.props.closeModal();
    this.props.createEmployee(values, () => {
      this.props.history.push('/groups');
    });
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" {...field.input} />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Name"
          name="name"
          type="text"
          component={this.renderField}
        />
        <div className="form-group">
          <label>Department</label>
        <Field name="department" component="select" className="form-control">
          <option value="/">Select department...</option>
          <option value="Engineering">Engineering</option>
          <option value="Sales">Sales</option>
          <option value="HR">HR</option>
          <option value="Marketing">Marketing</option>
        </Field>
      </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>

    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.name) {
    errors.name = 'Enter a name';
  }
  if (!values.department) {
    errors.department = 'Select Department';
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid

  return errors;
}


export default reduxForm({
  validate,
  form: 'employeeForm'
})(connect(null, { createEmployee })(EmployeeForm));
