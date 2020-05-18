import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function formatLinks(
  firstLinkPath,
  firstLinkText,
  secondLinkPath,
  secondLinkText
) {
  return (
    <span>
      <a href={firstLinkPath} target="_blank" rel="noopener noreferrer">
        {firstLinkText}
      </a>
      <a href={secondLinkPath} target="_blank" rel="noopener noreferrer">
        {secondLinkText}
      </a>
    </span>
  );
}

export default ({ timelineItems }) => {
  return (
    <Container>
      <Col>
        {timelineItems &&
          timelineItems.map(
            (
              {
                company,
                title,
                location,
                description,
                image,
                firstLinkPath,
                firstLinkText,
                secondLinkPath,
                secondLinkText,
              },
              index
            ) => {
              let links;
              if (!firstLinkPath && !secondLinkPath) {
                links = "";
              } else {
                links = formatLinks(
                  firstLinkPath,
                  firstLinkText,
                  secondLinkPath,
                  secondLinkText
                );
              }

              return (
                <Container className="timeline-item">
                  <Row>
                    <Col sm={4} lg={4}>
                      <div class="timeline-image-parent mx-auto">
                        <img class="timeline-image" src={image} alt="company" />
                      </div>
                    </Col>
                    <Col className="timeline-text" sm={4} lg={8}>
                      <h3>{company}</h3>
                      <h4>{title}</h4>
                      <h4>{location}</h4>
                      <p>
                        {description} <br></br>
                        {links}
                        <br></br>
                      </p>
                    </Col>
                  </Row>
                </Container>
              );
            }
          )}
      </Col>
    </Container>
  );
};
