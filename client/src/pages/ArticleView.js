import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ArticleCard from "../components/ArticleCard";
import ButtonMenu from "../components/ButtonMenu";
import Loader from "../components/Loading";
import { Container, Col, Row } from "reactstrap";
import {
  fetchTrending,
  fetchBusiness,
  fetchEnt,
  fetchHealth,
  fetchSports,
  fetchTech
} from "../actions/articleActions";

import Newspaper from "../assets/images/newspaper.png";

class ArticleView extends Component {
  componentWillMount() {
    this.props.fetchTrending();
  }

  //  fetch articles of chosen category
  getCategory = e => {
    // category comes from the value of clicked button
    const Category = e.target.value;
    switch (Category) {
      case "trending": {
        return this.props.fetchTrending();
      }
      case "business": {
        return this.props.fetchBusiness();
      }
      case "entertainment": {
        return this.props.fetchEnt();
      }
      case "health": {
        return this.props.fetchHealth();
      }
      case "sports": {
        return this.props.fetchSports();
      }
      case "technology": {
        return this.props.fetchTech();
      }
      default:
        console.log("no category selected");
    }
  };

  renderArticles = () => {
    return (
      <Row>
        {this.props.articles.map(news => (
          <Col md="4" key={news.title}>
            <ArticleCard
              articleImage={news.urlToImage || Newspaper}
              articleTitle={news.title}
              articleDescription={news.description}
              articleLink={news.url}
            />
          </Col>
        ))}
      </Row>
    );
  };

  render() {
    // if articles are loaded render those
    if (this.props.articles.length > 0) {
      return (
        <Container>
          <ButtonMenu
            category={this.getCategory}
          />
          {this.renderArticles()}
        </Container>
      );
    }
    // if not render the loading screen until they are
    return (
     <Loader />
    );
  }
}

ArticleView.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchTrending: PropTypes.func.isRequired,
  fetchBusiness: PropTypes.func.isRequired,
  fetchEnt: PropTypes.func.isRequired,
  fetchHealth: PropTypes.func.isRequired,
  fetchSports: PropTypes.func.isRequired,
  fetchTech: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  articles: state.articles.articles
});

export default connect(
  mapStateToProps,
  {
    fetchTrending,
    fetchBusiness,
    fetchEnt,
    fetchHealth,
    fetchSports,
    fetchTech
  }
)(ArticleView);
