import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardTitle,
  CardLink,
  CardImgOverlay,
  Col,
  Row
} from "reactstrap";

const CardContainer = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    width: 100%;
    padding: 0;
    margin: 0;
    height: 100%;
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;

    .card-title {
        padding: 10px;
    }
    small {
        display: block;
        text-align: right;
    }

    img {
        height: 225px;
    }
`;
const ArticleCard = props => {
  return (
    <CardContainer>
        <Card inverse>
        <CardImg
            top
            width="100%"
            className="img-fluid"
            src={props.articleImage}
            alt={props.articleName}
        />
        <CardImgOverlay>
            <small>Source | {props.articleSource}</small>
            <CardTitle>{props.articleTitle}</CardTitle>
            <Row>
            <Col sm="6">
                <CardLink href={props.articleLink} target="_blank">
                Read it
                </CardLink>
            </Col>
            <Col sm="6" className="text-right">
                <FontAwesomeIcon
                icon={faBookmark}
                data-title={props.articleTitle}
                data-image={props.articleImage}
                data-link={props.articleLink}
                data-special={props.articleId}
                data-source={props.articleSource}
                onClick={props.articleAction}
                />
            </Col>
            </Row>
        </CardImgOverlay>
        </Card>
    </CardContainer>
  );
};

export default ArticleCard;
