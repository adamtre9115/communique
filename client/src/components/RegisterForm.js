import React, { Component } from "react";
import OktaAuth from "@okta/okta-auth-js";
import { withAuth } from "@okta/okta-react";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Alert,
  Button,
  Container,
  // Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import config from '../config/appConfig';
import NewsWallpaper from "../assets/images/newsWallpaper.jpg"

const FormContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  font-family: 'Roboto', sans-serif;
  min-height: calc(100vh - 130px);
  color: #fff;
  background: url(${NewsWallpaper})
`
const Form = styled.form`
  padding: 20px;
  margin: 0 auto;
  width: 60%;

  @media (max-width: 760px) {
    width: 80%;
  }

  input {
    color:#fff;
    border: 0;
    border-radius: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #fff;

    &:focus {
      color: #fff;
      background: transparent;
      box-shadow: none;
      border-bottom: 1px solid #14284a;
    }
  
  }

  input::placeholder {
    color: #fff;
  }

  button {
    width: 100%;
    background-color: #ff3366;
    border: none;
    
    &:hover {
      background-color: #14284a;
      transition: .3s;
    }
  }

`

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
      // sessionToken: null
    };
    this.oktaAuth = new OktaAuth({ url: config.url });
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  
  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }
  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let userData = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password
    };
    //   API.register(userData)
    //  .then(user => {
    //     this.oktaAuth.signIn({
    //       username: this.state.email,
    //       password: this.state.password
    //     })
    //     .then(res => this.setState({
    //       sessionToken: res.sessionToken
    //     }));
    //   })
    //   .catch(err => console.log);
    this.props.registerUser(this.oktaAuth, userData);
  }

  render() {
    if (this.props.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.props.sessionToken });
      return null;
    }

    const errorMessage = this.props.error ? (
      <Alert color="danger">
        <span className="error-message">{this.props.error}</span>
      </Alert>
    ) : null;

    return (
      <FormContainer>
        <Container>
            <h1 className="text-center">Join Communiqe today</h1>
          <Form onSubmit={this.handleSubmit}>
            {errorMessage}
            <p>You're on your way but first, we need your...</p>
            <FormGroup>
              {/* <Label for="firstName">First Name</Label> */}
              <Input
                type="text"
                name="firstName"
                id="firstName"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
                placeholder="First Name"
              />
            </FormGroup>
            <FormGroup>
              {/* <Label for="lastName">Last Name</Label> */}
              <Input
                type="text"
                name="lastName"
                id="lastName"
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
                placeholder="Last Name"
              />
            </FormGroup>
            <FormGroup>
              {/* <Label for="email">Last Name</Label> */}
              <Input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              {/* <Label for="password">Password</Label> */}
              <Input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder="Password"
              />
            </FormGroup>
            <Button type="submit">Join</Button>
          </Form>
        </Container>
      </FormContainer>
    );
  }
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  sessionToken: PropTypes.string,
  error: PropTypes.string
};

const mapStateToProps = state => {
  return {
    sessionToken: state.authentication.sessionToken,
    error: state.authentication.error
  };
};

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(withAuth(RegisterForm));
