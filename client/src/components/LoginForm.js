import React, { Component } from "react";
import OktaAuth from "@okta/okta-auth-js";
import { withAuth } from "@okta/okta-react";
import { connect } from 'react-redux';
import { loginUser } from "../actions/authActions";
import PropTypes from "prop-types";
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

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
      <Container>
        <Form onSubmit={this.handleSubmit}>
          {errorMessage}
          <FormGroup>
            <Label for="userName">User Name</Label>
            <Input
              type="text"
              name="userName"
              id="userName"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
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
