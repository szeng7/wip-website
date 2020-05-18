import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Timeline from "../assets/components/Timeline.jsx";
import InterestsBar from "../assets/components/InterestsBar.jsx";
import CustomNavBar from "../assets/components/CustomNavBar.jsx";

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
      company: "Johns Hopkins University",
      title: "B.S. in Computer Science/Cognitive Science, graduated May 2020",
      location: "Baltimore Maryland",
      description:
        "My academic focus was primarily Natural Language Processing, resulting in a courseload rich with linguistics, artificial intelligence, math and computer science. Although this resulted in the most academically rigorous years of my life, Johns Hopkins provided for me endless opportunities to expand the ceiling of my knowledge and passion while surrounding me with inspiring peers: something I’ll forever cherish and look fondly upon.",
      image: require("../assets/images/portfolio/jhu.png"),
      firstLinkPath: null,
      firstLinkText: null,
      secondLinkPath: null,
      secondLinkText: null,
    },
    {
      company: "Johns Hopkins University",
      title: "B.S. in Computer Science/Cognitive Science, graduated May 2020",
      location: "Baltimore Maryland",
      description:
        "My academic focus was primarily Natural Language Processing, resulting in a courseload rich with linguistics, artificial intelligence, math and computer science. Although this resulted in the most academically rigorous years of my life, Johns Hopkins provided for me endless opportunities to expand the ceiling of my knowledge and passion while surrounding me with inspiring peers: something I’ll forever cherish and look fondly upon.",
      image: require("../assets/images/portfolio/jhu.png"),
      firstLinkPath: require("../assets/resources/SimonZengResumeSofDev.pdf"),
      firstLinkText: "See Poster",
      secondLinkPath: null,
      secondLinkText: null,
    },
    {
      company: "Johns Hopkins University",
      title: "B.S. in Computer Science/Cognitive Science, graduated May 2020",
      location: "Baltimore Maryland",
      description:
        "My academic focus was primarily Natural Language Processing, resulting in a courseload rich with linguistics, artificial intelligence, math and computer science. Although this resulted in the most academically rigorous years of my life, Johns Hopkins provided for me endless opportunities to expand the ceiling of my knowledge and passion while surrounding me with inspiring peers: something I’ll forever cherish and look fondly upon.",
      image: require("../assets/images/portfolio/jhu.png"),
      firstLinkPath: require("../assets/resources/SimonZengResumeSofDev.pdf"),
      firstLinkText: "See Poster",
      secondLinkPath: require("../assets/resources/SimonZengResumeSofDev.pdf"),
      secondLinkText: "See Poster",
    },
  ];

  return (
    <div className="portfolio">
      <CustomNavBar></CustomNavBar>
      <header>
        <div class="landing-wrapper">
          <Container>
            <Col>
              <h2 class="text-center">Simon Zeng</h2>
              <h2 class="text-center">Software Engineer</h2>
            </Col>
          </Container>
        </div>
      </header>
      <body>
        <section id="about">
          <h1 class="title text-center">About</h1>
          <Container className="about-wrapper">
            <Row>
              <Col lg={6} sm={3}>
                <img
                  class="about-image"
                  src={require("../assets/images/portfolio/profpic.jpg")}
                  alt="profile"
                />
              </Col>

              <Col lg={6} sm={9}>
                <Container className="text-center about-text mx-auto">
                  <br></br>
                  <br></br>
                  <br></br>
                  <p>
                    Hi! I’m currently a software engineer at Microsoft HQ in
                    Redmond, Washington. My academic and career interests
                    primarily revolve around Natural Language Processing,
                    specifically in human language acquisition/computational
                    language models and machine translation. Upon joining the
                    industry, I’ve also developed a particular affinity for
                    cloud computing resources and tools. Outside of my career, I
                    enjoy cooking and baking, having worked as a sushi chef
                    during high school. I am also fond of learning and studying
                    new languages; in the past few years, I’ve picked up some
                    elementary French and Spanish while furthering my
                    proficiency in Mandarin Chinese. Take a look at my interests
                    further below if you want to learn more!
                  </p>
                  <Button
                    class="button-resume"
                    href={require("../assets/resources/SimonZengResumeSofDev.pdf")}
                    download
                  >
                    Download Resume
                  </Button>
                </Container>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="timeline">
          <h1 class="title text-center">Timeline</h1>
          <Timeline timelineItems={timelineItems}></Timeline>
        </section>
        <section id="interests">
          <h1 class="title text-center">Interests</h1>
          <InterestsBar interestLinks={interestLinks}></InterestsBar>
        </section>
      </body>
      <footer id="contact">
        <h1 class="title text-center">Footer</h1>
        <p class="text-center">
          I’m always happy to connect! See any of the social media below or
          contact me at simonzeng9 [at] gmail [dot] com.
        </p>
      </footer>
    </div>
  );
};

export default MainPage;
