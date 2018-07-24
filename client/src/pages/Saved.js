import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";

class Saved extends Component {
  state = { user: null };

  getCurrentUser = async () => {
    this.props.auth.getUser().then(user => this.setState({ user }));
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  render() {
    if (!this.state.user) return null;
    return (
      <section className="user-profile">
        <h1>User Profile</h1>
        <div>
          <label>Name:</label>
          <span>{this.state.user.given_name}</span>
        </div>
      </section>
    );
  }
}

export default withAuth(Saved)