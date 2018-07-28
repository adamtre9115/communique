import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Login extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
    }
  
    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }
  
    componentDidUpdate() {
      this.checkAuthentication();
    }
  
    render() {
      if (this.state.authenticated === null) return null;
      return this.state.authenticated ?
        
        // if there is a session token redirect to home
        <Redirect to={{ pathname: '/articles' }} /> :
        <LoginForm baseUrl={this.props.baseUrl} />;
        
    }
  });