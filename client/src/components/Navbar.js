import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle
} from "reactstrap";

export default withAuth(class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      authenticated: null,
      isOpen: false
   };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    if (this.state.authenticated === null) return null;
    const authNav = this.state.authenticated ? (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">Communique</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="text-center" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/articles">Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/' onClick={this.props.auth.logout}>Logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/saved'>Saved</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    ) : (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Communique</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="text-center" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/articles">Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/register'>Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
    return (
      <div>
        { authNav }
      </div>
    )
  }
}
)

