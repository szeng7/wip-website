import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

class CustomNavBar extends Component {
    /*
    Custom nav bar to control css when expanded vs collapsed
  */

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            display: false,
            keep: false, //this is used to make sure navbar stays when user returns to top
            isDesktop: false,
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        document.addEventListener("scroll", () => {
            if (window.pageYOffset < 0.75 * window.innerHeight) {
                if (this.state.keep === false) {
                    this.setState({ display: false });
                }
            } else {
                this.setState({ display: true });
                this.setState({ keep: true });
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 800 });
    }

    getComponent() {
        if (this.state.isDesktop) {
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
                        expand="md"
                        className="navbar-custom"
                        sticky="top"
                    >
                        <Navbar.Toggle
                            aria-controls="responsive-navbar-nav"
                            onClick={this.toggleCollapse}
                        />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Container>
                                <Nav.Link
                                    className="custom-nav-link"
                                    href="#about"
                                    style={{ textDecoration: "none" }}
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    className="custom-nav-link"
                                    href="#timeline"
                                    style={{ textDecoration: "none" }}
                                >
                                    Timeline
                                </Nav.Link>
                                <Nav.Link
                                    className="custom-nav-link"
                                    href="#interests"
                                    style={{ textDecoration: "none" }}
                                >
                                    Interests
                                </Nav.Link>
                                <Nav.Link
                                    className="custom-nav-link"
                                    href="#contact"
                                    style={{ textDecoration: "none" }}
                                >
                                    Contact
                                </Nav.Link>
                            </Container>
                        </Navbar.Collapse>
                    </Navbar>
                </CSSTransition>
            );
        } else {
            return (
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    className="navbar-mobile justify-content-end"
                    sticky="top"
                >
                    <Navbar.Toggle
                        aria-controls="-navbar-nav"
                        className="order-md-1 order-2 custom-toggler"
                    />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Container>
                            <Nav.Link className="custom-nav-link" href="#about">
                                About
                            </Nav.Link>
                            <Nav.Link
                                className="custom-nav-link"
                                href="#timeline"
                            >
                                Timeline
                            </Nav.Link>
                            <Nav.Link
                                className="custom-nav-link"
                                href="#interests"
                            >
                                Interests
                            </Nav.Link>
                            <Nav.Link
                                className="custom-nav-link"
                                href="#contact"
                            >
                                Contact
                            </Nav.Link>
                        </Container>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
    }

    render() {
        return this.getComponent();
    }
}

export default CustomNavBar;
