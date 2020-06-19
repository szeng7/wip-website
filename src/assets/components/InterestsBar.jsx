import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";

const interestLinks = [
    {
        title: "Coding Projects",
        caption:
            "Technical projects that I’ve worked on in the past, such as NLP-related projects",
        image: require("../images/portfolio/coding.png"),
        link: "./coding",
    },
    {
        title: "Cooking & Baking",
        caption:
            "Recipes that I’ve used and pictures of what I’ve cooked/baked in my free time.",
        image: require("../images/portfolio/cooking.jpg"),
        link: "./cooking",
    },
    {
        title: "Blog",
        caption:
            "Articles that I’ve written about a range of technical and food-related topics",
        image: require("../images/portfolio/blog.jpg"),
        link: "./recipe",
    },
];

class InterestsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
            isLargeDesktop: false,
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 600 });
    }

    createLeftImageBar(interestsItem) {
        return (
            <Link to={interestsItem.link} style={{ textDecoration: "none" }}>
                <Card className="interest-item">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 1, offset: 1 }}>
                                <Card.Img
                                    className="interest-item-image-left"
                                    src={interestsItem.image}
                                />
                            </Col>
                            <Col md={9}>
                                <Container
                                    fluid
                                    className="interest-item-body-left"
                                >
                                    <Card.Body>
                                        <Col
                                            md={{
                                                span: 11,
                                                offset: 1,
                                            }}
                                        >
                                            <Card.Title className="interest-item-title">
                                                {interestsItem.title}
                                            </Card.Title>
                                            <Card.Text className="interest-item-text">
                                                {interestsItem.caption}
                                            </Card.Text>
                                        </Col>
                                    </Card.Body>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </Link>
        );
    }

    createRightImageBar(interestsItem) {
        return (
            <Link to={interestsItem.link} style={{ textDecoration: "none" }}>
                <Card className="interest-item">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 9, offset: 1 }}>
                                <Container
                                    fluid
                                    className="interest-item-body-right"
                                >
                                    <Card.Body>
                                        <Col
                                            md={{
                                                span: 11,
                                            }}
                                        >
                                            <Card.Title className="interest-item-title">
                                                {interestsItem.title}
                                            </Card.Title>
                                            <Card.Text className="interest-item-text">
                                                {interestsItem.caption}
                                            </Card.Text>
                                        </Col>
                                    </Card.Body>
                                </Container>
                            </Col>
                            <Col md={{ span: 1 }}>
                                <Card.Img
                                    className="interest-item-image-right"
                                    src={interestsItem.image}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </Link>
        );
    }

    createMobileLeftImageBar(interestsItem) {
        return (
            <Link to={interestsItem.link} style={{ textDecoration: "none" }}>
                <Card className="interest-item-mobile">
                    <Container fluid>
                        <Row>
                            <Col xs={1}>
                                <Card.Img
                                    className="interest-item-image-left-mobile"
                                    src={interestsItem.image}
                                />
                            </Col>
                            <Col xs={10}>
                                <Container
                                    fluid
                                    className="interest-item-body-left-mobile"
                                >
                                    <Card.Body>
                                        <Col>
                                            <Card.Title className="interest-item-title-mobile text-center">
                                                {interestsItem.title}
                                            </Card.Title>
                                        </Col>
                                    </Card.Body>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </Link>
        );
    }

    createMobileRightImageBar(interestsItem) {
        return (
            <Link to={interestsItem.link} style={{ textDecoration: "none" }}>
                <Card className="interest-item-mobile">
                    <Container fluid>
                        <Row>
                            <Col xs={{ span: 10, offset: 0 }}>
                                <Container
                                    fluid
                                    className="interest-item-body-right-mobile"
                                >
                                    <Card.Body>
                                        <Col xs={12}>
                                            <Card.Title className="interest-item-title-mobile text-center">
                                                {interestsItem.title}
                                            </Card.Title>
                                        </Col>
                                    </Card.Body>
                                </Container>
                            </Col>
                            <Col xs={{ span: 1, offset: 0 }}>
                                <Card.Img
                                    className="interest-item-image-right-mobile"
                                    src={interestsItem.image}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </Link>
        );
    }

    render() {
        if (this.state.isDesktop) {
            return (
                <Container fluid>
                    {this.createLeftImageBar(interestLinks[0])}
                    {this.createRightImageBar(interestLinks[1])}
                    {this.createLeftImageBar(interestLinks[2])}
                </Container>
            );
        } else {
            return (
                <Container fluid>
                    {this.createMobileLeftImageBar(interestLinks[0])}
                    {this.createMobileRightImageBar(interestLinks[1])}
                    {this.createMobileLeftImageBar(interestLinks[2])}
                </Container>
            );
        }
    }
}

export default InterestsBar;
