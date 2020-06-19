import React, { Component } from "react";
import { Col, Row, Tab, Nav, Container } from "react-bootstrap";

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
        };
    }

    createTabs() {
        return (
            <Nav variant="pills" className="flex-column">
                {this.props.timelineItems.map(
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
                    ) => (
                        <Nav.Item>
                            <Nav.Link eventKey={index}>{company}</Nav.Link>
                        </Nav.Item>
                    )
                )}
            </Nav>
        );
    }

    addLinks(firstLinkPath, firstLinkText, secondLinkPath, secondLinkText) {
        let links;
        if (!firstLinkPath && !secondLinkPath) {
            return "";
        } else {
            return (
                <span>
                    <a
                        href={firstLinkPath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {firstLinkText}
                    </a>
                    <a
                        href={secondLinkPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="second-link"
                    >
                        {secondLinkText}
                    </a>
                </span>
            );
        }
    }

    createPanes() {
        return (
            <Tab.Content>
                {this.props.timelineItems.map(
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
                    ) => (
                        <Tab.Pane eventKey={index}>
                            <Container>
                                <Row>{company}</Row>
                                <Row>{title}</Row>
                                <Row>{location}</Row>
                                <Row>{description}</Row>
                                <Row>
                                    {this.addLinks(
                                        firstLinkPath,
                                        firstLinkText,
                                        secondLinkPath,
                                        secondLinkText
                                    )}
                                </Row>
                            </Container>
                        </Tab.Pane>
                    )
                )}
            </Tab.Content>
        );
    }

    render() {
        return (
            <Container fluid className="timeline-container">
                <Tab.Container defaultActiveKey="0">
                    <Row>
                        <Col md={{ span: 3, offset: 2 }}>
                            {this.createTabs()}
                        </Col>
                        <Col md={6}>{this.createPanes()}</Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}
export default Timeline;

// export default ({ timelineItems }) => {
//   return (
//     <Container>
//       <Col>
//         {timelineItems &&
//           timelineItems.map(
//             (
//               {
//                 company,
//                 title,
//                 location,
//                 description,
//                 image,
//                 firstLinkPath,
//                 firstLinkText,
//                 secondLinkPath,
//                 secondLinkText,
//               },
//               index
//             ) => {
//               let links;
//               if (!firstLinkPath && !secondLinkPath) {
//                 links = "";
//               } else {
//                 links = formatLinks(
//                   firstLinkPath,
//                   firstLinkText,
//                   secondLinkPath,
//                   secondLinkText
//                 );
//               }

//               return (
//                 <Container className="timeline-item">
//                   <Row>
//                     <Col sm={4} lg={4}>
//                       <div class="timeline-image-parent mx-auto">
//                         <img class="timeline-image" src={image} alt="company" />
//                       </div>
//                     </Col>
//                     <Col className="timeline-text" sm={4} lg={8}>
//                       <h3>{company}</h3>
//                       <h4>{title}</h4>
//                       <h4>{location}</h4>
//                       <p>
//                         {description} <br></br>
//                         {links}
//                         <br></br>
//                       </p>
//                     </Col>
//                   </Row>
//                 </Container>
//               );
//             }
//           )}
//       </Col>
//     </Container>
//   );
// };
