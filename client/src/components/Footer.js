import React, { Component } from "react";
import styled from "styled-components";

//https://dribbble.com/shots/4654901-News-Feed-Design-for-a-Young-Journalist-Platform

const StyledFooter = styled.div`
    color: #fff;
    text-align: center;
    height: 80px;
    padding: 15px;
    background-color: #A5A5AC;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>&copy;2018 Made with &hearts; by Communique</StyledFooter>
    );
  }
}

export default Footer;
