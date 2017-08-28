import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel, Label } from 'react-bootstrap';
import { createGroups } from '../actions';
import GroupMemberList from './group_member_list';

class Groups extends Component {
  componentWillMount() {
    this.createGroups();
  }

  onClickGroupButton() {
    this.createGroups();
  }

  createGroups() {
    const params = {
      mia: this.props.absentEmployeeIds,
      size: 10
    };
    this.props.createGroups(params);
  }

  render() {
    const cols = this.props.groups.map((group, i) => {
    const groupName = `Group ${i + 1}`;
    const groupSize = group.length;

    const header = (
      <h5>{groupName} <Label>{groupSize}</Label></h5>
    );
    return (
      <div key={`${i}`}>
        <Col xs={6} md={3}>
          <div className="groupContainer groupMembersContainer">
            <Panel header={header} bsStyle="primary">
              <GroupMemberList members={group} />
            </Panel>
          </div>
        </Col>
    </div>
  );
  });
    return (
      <div>
        <div className="groupContainer">
          <button className="btn btn-info" onClick={() => this.onClickGroupButton()}>
            Recreate Groups
          </button>
        </div>
        <div className="groupContainer">
         <p><h6 className="text-primary">Select people who are not here to regroup..</h6></p>
        </div>
        <div>
          <Grid>
            <Row className="show-grid">
              {cols}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ absentEmployeeIds, groups }) {
  return ({ absentEmployeeIds, groups });
}

export default connect(mapStateToProps, { createGroups })(Groups);
