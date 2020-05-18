import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

export default ({ interestLinks }) => {
  /*
  A dynamic bar of image buttons that lead to other pages. 
   */
  return (
    <Container>
      <Row>
        {interestLinks &&
          interestLinks.map(({ title, caption, image, link }, index) => (
            <Col md={4}>
              <Link to={link}>
                <div class="interest-item mx-auto">
                  <div class="interest-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="interest-item-caption-content text-center text-white">
                      <p>{caption}</p>
                    </div>
                  </div>
                  <img class="img-fluid" src={image} alt="cannot find" />
                </div>
              </Link>
              <h3 class="interest-title text-center">{title}</h3>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
