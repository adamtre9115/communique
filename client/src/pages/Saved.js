import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/authActions";
import { fetchSaved } from "../actions/articleActions";
import ArticleCard from "../components/ArticleCard";
import { Col, Container, Row } from "reactstrap";

class Saved extends Component {
  getCurrentUser = async () => {
    // get user info for logged in user
    let user = await this.props.auth.getUser();

    // get any saved articles for this user
    return this.getArticles(user.email);
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  getArticles = async email => {
    this.props.fetchSaved(email);
    // return console.log(articles)
  };

  renderSaved = () => {
    return (
      <Row>
        {this.props.articles.map(news => (
          <Col md="4" key={news._id}>
            <ArticleCard
              articleImage={news.articleImage}
              articleTitle={news.articleTitle}
              // articleDescription={news.description}
              articleLink={news.articleLink}
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
          <h1>{given_name}'s Profile</h1>
          {this.renderSaved()}
        </Container>
      );
    }

    return (
      <Container>
        <h1>{given_name}'s Profile</h1>
        <h4>No saved articles</h4>
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
    fetchSaved
  }
)(withAuth(Saved));
