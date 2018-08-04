import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import NewsWallpaper from "../assets/images/newsWallpaper.jpg";

const FirstHalf = styled.div`
  color: #fff;
  background-image: url(${NewsWallpaper});
  min-height: calc(100vh - 130px);
  
  .activities {
    position: absolute;
    top: 30%;
    left: 15%;
    font-weight: bold;
    max-width: 440px;
  }
  .font-icon {
    margin-right: 15px;
  }
  .social {
    display: inline-block;
  }

  .social, .font-icon {
    font-size: 18px;
  }

  @media (max-width: 736px){
    min-height: 50vh;

    .activities {
      left: auto;
    }
  }
`
const SecondHalf = styled.div`
  .call-action {
    padding-top: 60px;
    max-width: 440px;
    margin: 0 auto;
  }

  .join-log {
    margin-top: 50px;
  }

  .home-action {
    display: block;
    padding: 20px;
    text-align: center;
    border-radius: 100px;
    margin-bottom: 15px;
    padding: 6px 16px
  }

  .register {
    background-color: #14284a;
    border: 1px solid #14284a;
    color: #fff;
    &:hover {
      color: #14284a;
      background-color: #fff;
      text-decoration: none;
      border: 1px solid #14284a;
      transition: .3s;
    }
  }

  .login {
    background-color: #fff;
    border: 1px solid #14284a;
    color: #14284a;
    &:hover {
      color: #fff;
      background-color: #14284a;
      border: 1px solid #fff;
      text-decoration: none;
      transition: .3s;
    }
  }

  .heading {
    font-size: 27px;
  }

  .should-join {
    font-size: 18px;
  }
`

const FullPage = styled.div`
  .row {
    margin-right: 0;
  }

  @media (max-width: 736px){
    .col-md-6 {
      padding-right: 0;
    }
  }
`
class Home extends Component {
  render() {
    return (
        <FullPage>
          <Row>
            <Col  xs={{ order: 2}} md={{size: 6 , order: 1}}>
              <FirstHalf>
                <Container>
                  <div className="activities">
                  <div>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className='font-icon'
                    />
                    <p className='social'>Follow your favorite articles.</p>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className='font-icon'
                    />
                    <p className='social'>Read articles from across the nation.</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                      icon={faBookmark}
                      className='font-icon'
                    />
                    <p className='social'>Save your favorite articles.</p>
                    </div>
                  </div>
                </Container>
              </FirstHalf>
            </Col>
          {/* 2nd half */}
            <Col xs={{ order: 1}} md={{size: 6 , order: 2}}>
              <SecondHalf>
                <Container>
                  <div className='call-action'>
                    <h1 className='heading'>Get informed. See what's going on in the world right now</h1>
                    <div className='join-log'>
                      <h2 className='should-join'>Join Communique today.</h2>
                      <Link to='/register' className='home-action register'>Register</Link>
                      <Link to='/login' className='home-action login'>Login</Link>
                    </div>
                  </div>
                </Container>
              </SecondHalf>
            </Col>
          </Row>
        </FullPage>
    );
  }
}

export default Home;
