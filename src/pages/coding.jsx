import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import SearchBarButton from "../assets/components/SearchBarButton.jsx";

const CodingPage = () => {
  return (
    <div className="side-projects">
      <Navbar className="border-nav" variant="light" sticky="top">
        <Container>
          <Nav.Link href="./">Main</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <SearchBarButton></SearchBarButton>
        </Container>
      </Navbar>
    </div>
  );
};

export default CodingPage;
