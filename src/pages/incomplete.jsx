import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const IncompletePage = () => {
    return (
        <div className="incomplete">
            <Container fluid className="mx-auto my-auto">
                <Row className="mx-auto text-center">
                    <Col className="my-auto" style={{ paddingTop: "30vh" }}>
                        <h2
                            style={{
                                color: "white",
                                fontFamily: "Poppins, san-serif",
                            }}
                        >
                            Sorry, still working on this page. Check back soon!
                        </h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IncompletePage;
