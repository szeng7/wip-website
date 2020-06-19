import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import $ from "jquery";

export default ({ interestLinks }) => {
    /*
  A dynamic bar of image buttons that lead to other pages. 
   */

    return (
        <Container fluid>
            {interestLinks &&
                interestLinks.map(({ title, caption, image, link }, index) => (
                    <Link to={link}>
                        <Card className="interest-item">
                            <Container>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img
                                            className="interest-item-image"
                                            src={image}
                                        />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Body>
                                            <Card.Title className="interest-item-title">
                                                {title}
                                            </Card.Title>
                                            <Card.Text className="interest-item-text">
                                                {caption}
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                    </Link>
                ))}
        </Container>
    );
};
