import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false /* if on tablet/desktop, show icon. else don't show  */,
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
    this.setState({ isDesktop: window.innerWidth > 600 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    if (isDesktop) {
      return (
        <div class="sidebar">
          <img
            class="line-top"
            src={require("../icons/gold-vertical-line.png")}
            alt="line"
          ></img>
          <a href="https://www.linkedin.com/in/simon-zeng-b26462123/">
            <img
              class="icon icon1"
              src={require("../icons/linkedin-48.png")}
              alt="linkedin"
            ></img>
          </a>
          <a href="https://github.com/szeng7/">
            <img
              class="icon icon2"
              src={require("../icons/github-48.png")}
              alt="github"
            ></img>
          </a>
          <a href="https://medium.com/@simonzeng9/">
            <img
              class="icon icon3"
              src={require("../icons/medium-48.png")}
              alt="medium"
            ></img>
          </a>
          <a href="https://www.instagram.com/chefzeng/">
            <img
              class="icon icon4"
              src={require("../icons/instagram-48.png")}
              alt="instagram"
            ></img>
          </a>
          <img
            class="line-bottom"
            src={require("../icons/gold-vertical-line-2.png")}
            alt="line"
          ></img>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Sidebar;
