import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import SearchBarButton from "./SearchBarButton.jsx";

class CustomNavBar extends Component {
  /*
    Custom nav bar to control css when expanded vs collapsed
  */

  state = { isOpen: false, atTop: true };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      let top = window.scrollY < 100;
      if (top !== this.state.atTop) {
        this.setState({ atTop: false });
      }
      if (top) {
        this.setState({ atTop: true });
      }
    });
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className={this.state.isOpen ? "navbar-open" : "navbar-close"}
        variant="dark"
        bg={this.state.atTop ? "dark" : ""}
        sticky="top"
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={this.toggleCollapse}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
            <Nav.Link className="custom-nav-link" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="custom-nav-link" href="#timeline">
              Timeline
            </Nav.Link>
            <Nav.Link className="custom-nav-link" href="#interests">
              Interests
            </Nav.Link>
            <Nav.Link className="custom-nav-link" href="#contact">
              Contact
            </Nav.Link>
            <SearchBarButton></SearchBarButton>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavBar;
