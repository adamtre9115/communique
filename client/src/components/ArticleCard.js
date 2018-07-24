import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, Col, Row} from 'reactstrap';

  const ArticleCard = (props) => {
      return (
        <Card>
            <CardImg top width="100%" className='img-fluid' src={props.articleImage} alt={props.articleName}></CardImg>
            <CardBody>
                <CardTitle>{props.articleTitle}</CardTitle>
                <CardText>{props.articleDescription}</CardText>
                <Row>
                    <Col sm='6'>
                        <CardLink href={props.articleLink} target='_blank'>Read it</CardLink>
                    </Col>
                    <Col sm='6' className='text-right'>
                        <FontAwesomeIcon icon={faBookmark} />
                    </Col>
                </Row>
            </CardBody>
        </Card>
      )
  }

  export default ArticleCard;