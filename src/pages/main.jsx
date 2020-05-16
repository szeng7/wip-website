import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import SearchBarButton from "../assets/components/SearchBarButton.jsx";
import TimelineItem from "../assets/components/TimelineItem.jsx";
import InterestsBar from "../assets/components/InterestsBar.jsx";

const MainPage = () => {
  const interestLinks = [
    {
      title: "Coding Projects",
      caption:
        "Side projects that I’ve worked on in the past, ranging from Android apps to NLP-related projects (chatbots, search engines, etc)",
      image: require("../assets/images/portfolio/cake1.jpg"),
      link: "./coding",
    },
    {
      title: "Cooking & Baking",
      caption:
        "Recipes that I’ve used and developed upon as well as pictures of what I’ve cooked and baked in my free time.",
      image: require("../assets/images/portfolio/cake1.jpg"),
      link: "./cooking",
    },
    {
      title: "Blog",
      caption:
        "Articles and posts that I’ve made about a range of topics, like machine learning topics and how to pair wines to meals.",
      image: require("../assets/images/portfolio/cake1.jpg"),
      link: "./recipe",
    },
  ];

  return (
    <div className="portfolio">
      <Navbar className="border-nav" variant="light" sticky="top">
        <Container>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#timeline">Timeline</Nav.Link>
          <Nav.Link href="#interests">Interests</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <SearchBarButton></SearchBarButton>
        </Container>
      </Navbar>
      <header>
        <h1>WELCOME TO MY WIP PAGE</h1>
      </header>
      <body>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section id="about">
          <h1>About</h1>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section id="timeline">
          <h1>Timeline</h1>
          <TimelineItem></TimelineItem>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section id="interests">
          <h1>Interests</h1>
          <InterestsBar interestLinks={interestLinks}></InterestsBar>
          <Link to="/cooking">Cooking</Link>
          <br></br>
          <Link to="/coding">Coding</Link>
          <br></br>
          <Link to="/recipe">Recipe</Link>
          <br></br>
          <Link to="/404">404</Link>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </body>
      <footer id="contact">
        <h1>Footer</h1>
      </footer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default MainPage;
