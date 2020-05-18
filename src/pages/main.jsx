import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import SearchBarButton from "../assets/components/SearchBarButton.jsx";
import Timeline from "../assets/components/Timeline.jsx";
import InterestsBar from "../assets/components/InterestsBar.jsx";

const MainPage = () => {
  /*
  Mappings of props to pass into components to display object dynamically more easily.
  Eventually put this into a database?
  */
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

  const timelineItems = [
    {
      company: "Microsoft",
      title: "Software Engineer since August 2020",
      location: "Redmond, Washington",
      description: "this is a long description of wtf I do",
      image: require("../assets/images/portfolio/cake1.jpg"),
      firstLinkPath: null,
      firstLinkText: null,
      secondLinkPath: null,
      secondLinkText: null,
    },
    {
      company: "Microsoft",
      title: "Software Engineer since August 2020",
      location: "Redmond, Washington",
      description: "this is a long description of wtf I do",
      image: require("../assets/images/portfolio/cake1.jpg"),
      firstLinkPath: require("../assets/resources/SimonZengResumeSofDev.pdf"),
      firstLinkText: "See Poster",
      secondLinkPath: null,
      secondLinkText: null,
    },
    {
      company: "Microsoft",
      title: "Software Engineer since August 2020",
      location: "Redmond, Washington",
      description: "this is a long description of wtf I do",
      image: require("../assets/images/portfolio/cake1.jpg"),
      firstLinkPath: null,
      firstLinkText: null,
      secondLinkPath: null,
      secondLinkText: null,
    },
  ];

  return (
    <div className="portfolio">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="custom-nav"
        variant="light"
        sticky="top"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
      <header>
        <h1>Simon Zeng</h1>
        <h1>SOFTWARE ENGINEER</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </header>
      <body>
        <section id="about">
          <h1>About</h1>
          <div class="portfolio-item mx-auto">
            <img
              class="img-fluid"
              src={require("../assets/images/portfolio/cake1.jpg")}
              alt="cannot find"
            />
            <p>
              Hi! I’m currently a software engineer at Microsoft HQ in Redmond,
              Washington. My academic and career interests primarily revolve
              around Natural Language Processing, specifically in human language
              acquisition/computational language models and machine translation.
              Upon joining the industry, I’ve also developed a particular
              affinity for cloud computing resources and tools. Outside of my
              career, I enjoy cooking and baking, having worked as a sushi chef
              during high school. I am also fond of learning and studying new
              languages; in the past few years, I’ve picked up some elementary
              French and Spanish while furthering my proficiency in Mandarin
              Chinese. Take a look at my interests further below if you want to
              learn more!
            </p>
            <Button
              href={require("../assets/resources/SimonZengResumeSofDev.pdf")}
              download
            >
              Download Resume
            </Button>
          </div>
        </section>
        <section id="timeline">
          <h1>Timeline</h1>
          <Timeline timelineItems={timelineItems}></Timeline>
        </section>
        <section id="interests">
          <h1>Interests</h1>
          <InterestsBar interestLinks={interestLinks}></InterestsBar>
        </section>
      </body>
      <footer id="contact">
        <h1>Footer</h1>
        <p>
          I’m always happy to connect! See any of the social media below or
          contact me at simonzeng9 [at] gmail [dot] com.
        </p>
      </footer>
    </div>
  );
};

export default MainPage;
