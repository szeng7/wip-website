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
        this.setState({ isDesktop: window.innerWidth > 800 });
    }

    render() {
        if (this.state.isDesktop) {
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
                    <Container className="contact-icons-bar">
                        <Row>
                            <Col>
                                <img
                                    className="contact-line-left"
                                    src={require("../icons/horizontal-line-short-gold.png")}
                                    alt="line"
                                ></img>
                            </Col>
                            <Col xs={{ offset: 1 }}>
                                <a href="https://www.linkedin.com/in/simon-zeng-b26462123/">
                                    <i className="fab fa-linkedin"></i>
                                    <img
                                        className="contact-icon"
                                        src={require("../icons/linkedin-gold.png")}
                                        alt="linkedin"
                                    ></img>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://github.com/szeng7/">
                                    <img
                                        className="contact-icon"
                                        src={require("../icons/github-gold.png")}
                                        alt="github"
                                    ></img>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://medium.com/@simonzeng9/">
                                    <img
                                        className="contact-icon"
                                        src={require("../icons/medium-gold.png")}
                                        alt="medium"
                                    ></img>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://www.instagram.com/chefzeng/">
                                    <img
                                        className="contact-icon"
                                        src={require("../icons/instagram-gold.png")}
                                        alt="instagram"
                                    ></img>
                                </a>
                            </Col>
                            <Col>
                                <img
                                    className="contact-line-right"
                                    src={require("../icons/horizontal-line-short-gold.png")}
                                    alt="line"
                                ></img>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            );
        }
    }
}

export default ContactPage;
