import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, NavLink } from 'reactstrap';

import API from '../utils/API';

import styled from 'styled-components';

const ModalDiv = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto");

  display: inline-block;
  &:hover {
      color: #ff3366;
      cursor: pointer;
    }
  
  .modal-dialog,
  .user-modal {
    font-family: "Roboto", sans-serif;
  }
`;

class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      user: "",
      username: ""
    };

    this.toggle = this.toggle.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  recoverPassword = (user) => {
    user = this.state.username;
    API.forgotPassword(user).then(this.toggle())
  }

  deactivateUser = async (user) => {
    // grab userId from redux state
    user = this.props.userID

    // send user to Okta for deactivation and close modal
    API.deactivateAcct(user).then(() => this.toggle())
  }

  render() {
      const Method = this.props.method
      if (Method === 'recovery') {
        return (
            <ModalDiv>
              <a onClick={this.toggle}>Forgot Password?</a>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className='user-modal'>
                <ModalHeader toggle={this.toggle}>Forgotten Password</ModalHeader>
                <ModalBody>
                  <p>Looks like you don't remember your password. Enter your username and let us help you out.</p>
                  <Input
                    type="text"
                    name="userName"
                    id="userName"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                    placeholder="User Name"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.recoverPassword}>Submit</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </ModalDiv>
          );
    } else {
        return (
            <ModalDiv>
              <NavLink onClick={this.toggle}>Deactivate</NavLink>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Deactivate Account</ModalHeader>
                <ModalBody>
                  <p>We're sad to see you go but, If you're sure about your decision click the button.</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={this.deactivateUser}>Deactivate</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </ModalDiv>
        )
    }
  }
}

export default withAuth(UserModal);