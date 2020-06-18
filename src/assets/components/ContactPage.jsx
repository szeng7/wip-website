import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

class ContactPage extends Component {
    /*
    Custom contact page
  */

    render() {
        return (
            <Container fluid className="contact-container">
                <div class="title-wrapper">
                    <h1 class="title">Get In Touch</h1>
                    <img
                        class="title-line"
                        src={require("../icons/horizontal-line-short-gold.png")}
                        alt="horizontal line"
                    />
                </div>
                <Col md={{ span: 8, offset: 2 }}>
                    <p className="contact-text text-center">
                        Whether you have a question, opportunity or just want to
                        chat, I’m always happy to connect! My social media can
                        be accessed through the icons.
                    </p>
                </Col>
                <Col className="text-center">
                    <Button variant="email">Send Email</Button>
                </Col>
            </Container>
        );
    }
}

export default ContactPage;
