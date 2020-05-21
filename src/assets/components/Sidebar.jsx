import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar">
        <a href="#icons">
          <img
            class="line"
            src={require("../icons/gold-vertical-line.png")}
            alt="line"
          ></img>
          <img
            class="icon"
            src={require("../icons/linkedin-48.png")}
            alt="linkedin"
          ></img>
          <img
            class="icon"
            src={require("../icons/github-48.png")}
            alt="github"
          ></img>
          <img
            class="icon"
            src={require("../icons/medium-48.png")}
            alt="medium"
          ></img>
          <img
            class="icon"
            src={require("../icons/instagram-48.png")}
            alt="instagram"
          ></img>
        </a>
      </div>
    );
  }
}
