import React, { Component } from "react";
import OktaAuth from "@okta/okta-auth-js";
import { withAuth } from "@okta/okta-react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { loginUser } from "../actions/authActions";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Alert,
  Button,
  Container,
  // Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

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

  a {
    display: inline-block;
    color: #fff;
    margin-top: 10px;

    &:hover {
      color: #ff3366;
      text-decoration: none;
    }
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

`;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.oktaAuth
    //   .signIn({
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    //   .then(res =>
    //     this.setState({
    //       sessionToken: res.sessionToken
    //     })
    //   )
    //   .catch(err => {
    //     this.setState({ error: err.message });
    //     console.log(err.statusCode + " error", err);
    //   });
    this.props.loginUser(
      this.oktaAuth,
      this.state.username,
      this.state.password
    );
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
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
          <Form onSubmit={this.handleSubmit}>
            <h1 className='text-center'>Welcome Back!</h1>
            {errorMessage}
            <FormGroup>
              {/* <Label for="userName">User Name</Label> */}
              <Input
                type="text"
                name="userName"
                id="userName"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                placeholder="User Name"
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
            <Button type="submit">Login</Button>
            <p className="text-center"><Link to='/register'>Register for Communique</Link></p>
          </Form>
        </Container>
      </FormContainer>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  sessionToken: PropTypes.string,
  error: PropTypes.string
}

const mapStateToProps = state => {
  return {
    sessionToken: state.authentication.sessionToken,
    error: state.authentication.error
  };
};

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(withAuth(LoginForm));
