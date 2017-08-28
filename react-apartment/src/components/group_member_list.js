import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import Employee from './employee';
import { selectAbsentEmployees, createGroups } from '../actions';

class GroupMemberList extends Component {

  onSelectEmployees(id) {
    this.props.selectAbsentEmployees(id);
    // recreate group
    const params = {
      mia: this.props.absentEmployeeIds,
      size: 10
    };
    this.props.createGroups(params);
  }

  render() {
    const { members } = this.props;
    const ms = members.map((person) => {
      return (
        <ListGroupItem key={person._id.$oid}>
          <Employee employee={person} onSelectEmployee={this.onSelectEmployees.bind(this)} />
        </ListGroupItem>
      );
    });
    return (
      <ListGroup>
      {ms}
      </ListGroup>
    );
  }
}

const mapStateToProps = ({ absentEmployeeIds }) => {
  return ({ absentEmployeeIds });
};

export default connect(mapStateToProps, { selectAbsentEmployees, createGroups })(GroupMemberList);
