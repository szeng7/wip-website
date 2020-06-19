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
            <Nav variant="pills" className="flex-column timeline-tabs">
                {this.props.timelineItems.map(
                    (
                        {
                            tab,
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
                            <Nav.Link eventKey={index}>{tab}</Nav.Link>
                        </Nav.Item>
                    )
                )}
            </Nav>
        );
    }

    addLinks(firstLinkPath, firstLinkText, secondLinkPath, secondLinkText) {
        if (!firstLinkPath && !secondLinkPath) {
            return "";
        } else {
            return (
                <p>
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
                        className="second-link"
                    >
                        {secondLinkText}
                    </a>
                </p>
            );
        }
    }

    createPanes() {
        return (
            <Tab.Content className="timeline-content">
                {this.props.timelineItems.map(
                    (
                        {
                            tab,
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
                                <Row>
                                    <h1>{company}</h1>
                                </Row>
                                <Row>
                                    <h2>{title}</h2>
                                </Row>
                                <Row>
                                    <h3>{location}</h3>
                                </Row>
                                <Row>
                                    <p>{description}</p>
                                </Row>
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
                <Tab.Container defaultActiveKey="1" className="list-inline">
                    <Row>
                        <Col xs={12} md={{ span: 3, offset: 1 }}>
                            {this.createTabs()}
                        </Col>
                        <Col xs={12} md={7}>
                            {this.createPanes()}
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}
export default Timeline;
