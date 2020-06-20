import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { withRouter } from "react-router-dom";

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
            color: "white",
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
                this.setState({ keep: true });
                this.setState({ display: true });
                if (
                    1.75 * window.innerHeight < window.pageYOffset &&
                    window.pageYOffset < 3.5 * window.innerHeight
                ) {
                    // if (this.state.color !== "black") {
                    //     this.setState({ display: false });
                    // }
                    this.setState({ color: "black" });
                } else {
                    // if (this.state.color !== "white") {
                    //     this.setState({ display: false });
                    // }
                    this.setState({ color: "white" });
                }
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
            let navLinkClass;
            if (this.state.color === "white") {
                navLinkClass = "custom-nav-link-white";
            } else {
                navLinkClass = "custom-nav-link-black";
            }
            return (
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
                            <Nav.Link className={navLinkClass} href="#about">
                                About
                            </Nav.Link>
                            <Nav.Link className={navLinkClass} href="#timeline">
                                Timeline
                            </Nav.Link>
                            <Nav.Link
                                className={navLinkClass}
                                href="#interests"
                            >
                                Interests
                            </Nav.Link>
                            <Nav.Link className={navLinkClass} href="#contact">
                                Contact
                            </Nav.Link>
                        </Container>
                    </Navbar.Collapse>
                </Navbar>
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
