import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

import SearchBarButton from "./SearchBarButton.jsx";

class CustomNavBar extends Component {
  /*
    Custom nav bar to control css when expanded vs collapsed
  */

  state = { isOpen: false, display: false, keep: false };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset < 0.75 * window.innerHeight) {
        if (this.state.keep == false) {
          this.setState({ display: false });
        }
      } else {
        this.setState({ keep: true });
        this.setState({ display: true });
      }
    });
  }

  render() {
    return (
      <CSSTransition
        in={this.state.display}
        timeout={600}
        classNames="fade"
        unmountOnExit
        appear
      >
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar-custom"
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
      </CSSTransition>
    );
  }
}

export default CustomNavBar;
