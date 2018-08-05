import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/authActions";
import { fetchSaved, removeSaved } from "../actions/articleActions";
import ArticleCard from "../components/ArticleCard";
// import UserModal from "../components/UserModal";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";

const SavedContainer = styled.div`
  min-height: calc(100vh - 130px);
`;

class Saved extends Component {
  getCurrentUser = async () => {
    // get user info for logged in user
    this.props.auth.getUser().then(user => this.props.fetchUser(user));
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  componentWillReceiveProps(nextProps) {
    // getting the user happens asyncronously so,
    // once we recieve those props get the saved articles
    // this will trigger a render for the articles
    if (this.props.user !== nextProps.user) {
      this.props.fetchSaved(nextProps.user.email);
    }
  }

  removeArticle = e => {
    let id = e.target.dataset.special;
    // console.log(id)
    this.props.removeSaved(id);
  };
  renderSaved = () => {
    return (
      <Row>
        {this.props.articles.map(news => (
          <Col md="4" key={news._id}>
            <ArticleCard
              articleImage={news.articleImage}
              articleTitle={news.articleTitle}
              articleLink={news.articleLink}
              articleSource={news.articleSource}
              articleId={news._id}
              articleAction={this.removeArticle}
            />
          </Col>
        ))}
      </Row>
    );
  };

  render() {
    if (!this.props.user) return null;
    const { given_name } = this.props.user;

    if (this.props.articles.length > 0) {
      return (
        <Container>
          <SavedContainer>
            <h1>{given_name}'s Shelf</h1>
            {this.renderSaved()}
            {/* <div>
              <UserModal userID ={this.props.user.sub}/>
            </div> */}
          </SavedContainer>
        </Container>
      );
    }

    return (
      <Container>
        <SavedContainer>
          <h1>{given_name}'s Shelf</h1>
          <h4>Your shelf is currently empty</h4>
          {/* <div>
            <UserModal />
          </div> */}
        </SavedContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authentication.user,
    articles: state.articles.savedArticles
  };
};

export default connect(
  mapStateToProps,
  {
    fetchUser,
    fetchSaved,
    removeSaved
  }
)(withAuth(Saved));
