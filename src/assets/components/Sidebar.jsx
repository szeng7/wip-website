import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false /* if on tablet/desktop, show icon. else don't show  */,
            changeToBlack: false,
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        document.addEventListener("scroll", () => {
            if (
                window.pageYOffset > 1.5 * window.innerHeight &&
                window.pageYOffset < 4 * window.innerHeight
            ) {
                //this.setState({ changeToBlack: true });
            } else {
                this.setState({ changeToBlack: false });
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 600 });
    }

    getComponent() {
        const isDesktop = this.state.isDesktop;
        const changeToBlack = this.state.changeToBlack;
        let color, display;

        if (!isDesktop) {
            return null;
        }

        if (!changeToBlack) {
            color = "gold";
            display = true;
        } else {
            color = "black";
            display = false;
        }

        return (
            <CSSTransition
                in={display}
                timeout={1000}
                classNames="swap"
                unmountOnExit
                appear
            >
                <div className="sidebar">
                    <img
                        className="line-top"
                        src={require("../icons/vertical-line-" +
                            color +
                            ".png")}
                        alt="line"
                    ></img>
                    <a href="https://www.linkedin.com/in/simon-zeng-b26462123/">
                        <i className="fab fa-linkedin"></i>
                        <img
                            className="icon icon1"
                            src={require("../icons/linkedin-" + color + ".png")}
                            alt="linkedin"
                        ></img>
                    </a>
                    <a href="https://github.com/szeng7/">
                        <img
                            className="icon icon2"
                            src={require("../icons/github-" + color + ".png")}
                            alt="github"
                        ></img>
                    </a>
                    <a href="https://medium.com/@simonzeng9/">
                        <img
                            className="icon icon3"
                            src={require("../icons/medium-" + color + ".png")}
                            alt="medium"
                        ></img>
                    </a>
                    <a href="https://www.instagram.com/chefzeng/">
                        <img
                            className="icon icon4"
                            src={require("../icons/instagram-" +
                                color +
                                ".png")}
                            alt="instagram"
                        ></img>
                    </a>
                    <img
                        className="line-bottom"
                        src={require("../icons/vertical-line-2-" +
                            color +
                            ".png")}
                        alt="line"
                    ></img>
                </div>
            </CSSTransition>
        );
    }

    render() {
        return this.getComponent();
    }
}

export default Sidebar;
