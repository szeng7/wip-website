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
      if (window.scrollY < 0.8 * window.innerHeight) {
        this.setState({ atTop: true });
      } else {
        this.setState({ atTop: false });
      }
    });
  }

  render() {
    const atTop = this.state.atTop;

    if (!atTop) {
      return (
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar-color"
          variant="light"
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

    return null;
  }
}

export default CustomNavBar;
