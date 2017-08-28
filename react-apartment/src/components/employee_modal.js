import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import EmployeeForm from './employee_form';

class EmployeeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          onClick={this.open.bind(this)}
        >
          Add employee
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>New Employee Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EmployeeForm closeModal={()=>{this.close()}} />
        </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default EmployeeModal;
