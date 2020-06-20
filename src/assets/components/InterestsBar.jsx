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
        this.setState({ isDesktop: window.innerWidth > 1024 });
    }

    createLeftImageBar(interestsItem) {
        return (
            <Card className="interest-item-left">
                <Container fluid>
                    <Row>
                        <Col md={{ span: 9, offset: 1 }}>
                            <Link
                                to={interestsItem.link}
                                style={{ textDecoration: "none" }}
                            >
                                <Container fluid className="interest-item-body">
                                    <Card.Body>
                                        <Card.Img
                                            className="interest-item-image-left"
                                            src={interestsItem.image}
                                        />
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
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Card>
        );
    }

    createRightImageBar(interestsItem) {
        return (
            <Card className="interest-item-right">
                <Container fluid>
                    <Row>
                        <Col md={{ span: 9, offset: 1 }}>
                            <Link
                                className="interest-link"
                                to={interestsItem.link}
                                style={{ textDecoration: "none" }}
                            >
                                <Container fluid className="interest-item-body">
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
                                        <Card.Img
                                            className="interest-item-image-right"
                                            src={interestsItem.image}
                                        />
                                    </Card.Body>
                                </Container>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Card>
        );
    }

    createMobileLeftImageBar(interestsItem) {
        return (
            <Card className="interest-item-left-mobile">
                <Container fluid>
                    <Row>
                        <Col xs={{ span: 8, offset: 2 }}>
                            <Link
                                to={interestsItem.link}
                                style={{ textDecoration: "none" }}
                            >
                                <Container
                                    fluid
                                    className="interest-item-body-mobile"
                                >
                                    <Card.Img
                                        className="interest-item-image-left-mobile"
                                        src={interestsItem.image}
                                    />
                                    <Card.Body>
                                        <Card.Title className="interest-item-title-mobile text-center">
                                            {interestsItem.title}
                                        </Card.Title>
                                    </Card.Body>
                                </Container>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Card>
        );
    }

    createMobileRightImageBar(interestsItem) {
        return (
            <Card className="interest-item-right-mobile">
                <Container fluid>
                    <Row>
                        <Col xs={{ span: 8, offset: 2 }}>
                            <Link
                                to={interestsItem.link}
                                style={{ textDecoration: "none" }}
                            >
                                <Container
                                    fluid
                                    className="interest-item-body-mobile"
                                >
                                    <Card.Body>
                                        <Card.Title className="interest-item-title-mobile text-center">
                                            {interestsItem.title}
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Img
                                        className="interest-item-image-right-mobile"
                                        src={interestsItem.image}
                                    />
                                </Container>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Card>
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
