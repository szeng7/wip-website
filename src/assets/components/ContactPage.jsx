import React, { Component } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

class ContactPage extends Component {
    /*
    Custom contact page
  */
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
            isCooking: false,
        };
        this.updatePredicate = this.updatePredicate.bind(this);
        if (props.isCooking) {
            this.state.isCooking = true;
        }
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 800 });
    }

    getCookingPage() {
        return (
            <Container fluid className="contact-cooking-container">
                <div className="title-wrapper">
                    <h1 className="title">Get In Touch</h1>
                    <img
                        className="title-line"
                        src={require("../icons/horizontal-line-short-gold.png")}
                        alt="horizontal line"
                    />
                </div>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <p className="contact-text text-center">
                            Whether you have a question, opportunity or just
                            want to chat, I’m always happy to connect! My social
                            media can be accessed through the icons.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button
                            variant="email"
                            href="mailto:simonzeng9@gmail.com"
                        >
                            Send Email
                        </Button>
                    </Col>
                </Row>
                <Row className="contact-icon-row  d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/simon-zeng-b26462123/">
                        <i className="fab fa-linkedin"></i>
                        <img
                            className="contact-icon"
                            src={require("../icons/linkedin-gold.png")}
                            alt="linkedin"
                        ></img>
                    </a>

                    <a href="https://github.com/szeng7/">
                        <img
                            className="contact-icon"
                            src={require("../icons/github-gold.png")}
                            alt="github"
                        ></img>
                    </a>

                    <a href="https://medium.com/@simonzeng9/">
                        <img
                            className="contact-icon"
                            src={require("../icons/medium-gold.png")}
                            alt="medium"
                        ></img>
                    </a>

                    <a href="https://www.instagram.com/chefzeng/">
                        <img
                            className="contact-icon contact-icon-4"
                            src={require("../icons/instagram-gold.png")}
                            alt="instagram"
                        ></img>
                    </a>
                </Row>
            </Container>
        );
    }

    render() {
        if (this.state.isDesktop) {
            if (this.state.isCooking) {
                return this.getCookingPage();
            }
            return (
                <Container fluid className="contact-container">
                    <div className="title-wrapper">
                        <h1 className="title">Get In Touch</h1>
                        <img
                            className="title-line"
                            src={require("../icons/horizontal-line-short-gold.png")}
                            alt="horizontal line"
                        />
                    </div>
                    <Col md={{ span: 8, offset: 2 }}>
                        <p className="contact-text text-center">
                            Whether you have a question, opportunity or just
                            want to chat, I’m always happy to connect! My social
                            media can be accessed through the icons.
                        </p>
                    </Col>
                    <Col className="text-center">
                        <Button
                            variant="email"
                            href="mailto:simonzeng9@gmail.com"
                        >
                            Send Email
                        </Button>
                    </Col>
                </Container>
            );
        } else {
            return (
                <Container fluid className="contact-container">
                    <div className="title-wrapper">
                        <h1 className="title">Get In Touch</h1>
                        <img
                            className="title-line"
                            src={require("../icons/horizontal-line-short-gold.png")}
                            alt="horizontal line"
                        />
                    </div>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <p className="contact-text text-center">
                                Whether you have a question, opportunity or just
                                want to chat, I’m always happy to connect! My
                                social media can be accessed through the icons.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button
                                variant="email"
                                href="mailto:simonzeng9@gmail.com"
                            >
                                Send Email
                            </Button>
                        </Col>
                    </Row>
                    <Row className="contact-icon-row  d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/simon-zeng-b26462123/">
                            <i className="fab fa-linkedin"></i>
                            <img
                                className="contact-icon"
                                src={require("../icons/linkedin-gold.png")}
                                alt="linkedin"
                            ></img>
                        </a>

                        <a href="https://github.com/szeng7/">
                            <img
                                className="contact-icon"
                                src={require("../icons/github-gold.png")}
                                alt="github"
                            ></img>
                        </a>

                        <a href="https://medium.com/@simonzeng9/">
                            <img
                                className="contact-icon"
                                src={require("../icons/medium-gold.png")}
                                alt="medium"
                            ></img>
                        </a>

                        <a href="https://www.instagram.com/chefzeng/">
                            <img
                                className="contact-icon contact-icon-4"
                                src={require("../icons/instagram-gold.png")}
                                alt="instagram"
                            ></img>
                        </a>
                    </Row>
                </Container>
            );
        }
    }
}

export default ContactPage;
