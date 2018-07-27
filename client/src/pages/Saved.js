import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/authActions";

class Saved extends Component {
  state = { user: null };

  getCurrentUser = async () => {
    // this.props.auth.getUser().then(user => this.setState({ user }));
    this.props.auth.getUser().then(user => this.props.fetchUser(user))
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  render() {
    if (!this.props.user) return null;
    const { given_name } = this.props.user
    return (
      <section className="user-profile">
        <h1>{given_name}'s Profile</h1>
        <hr />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authentication.user
  };
};

export default connect(
  mapStateToProps,
  {
    fetchUser
  }
)(withAuth(Saved));
