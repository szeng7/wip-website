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
      image: require("../assets/images/portfolio/coding.png"),
      link: "./coding",
    },
    {
      title: "Cooking & Baking",
      caption:
        "Recipes that I’ve used and developed upon as well as pictures of what I’ve cooked and baked in my free time.",
      image: require("../assets/images/portfolio/cooking.jpg"),
      link: "./cooking",
    },
    {
      title: "Blog",
      caption:
        "Articles and posts that I’ve made about a range of topics, like machine learning topics and how to pair wines to meals.",
      image: require("../assets/images/portfolio/blog.png"),
      link: "./recipe",
    },
  ];

  const timelineItems = [
    {
      company: "Microsoft",
      title: "Software Engineer, Starting in August 2020",
      location: "Redmond, Washington",
      description: "Looking forward to seeing which team I join!",
      image: require("../assets/images/portfolio/microsoft.png"),
      firstLinkPath: null,
      firstLinkText: null,
      secondLinkPath: null,
      secondLinkText: null,
    },
    {
      company: "Johns Hopkins University",
      title: "B.S. in Computer Science/Cognitive Science, graduated May 2020",
      location: "Baltimore, Maryland",
      description:
        "My academic focus was primarily Natural Language Processing, resulting in a courseload rich with linguistics, artificial intelligence, math and computer science. Although this resulted in the most academically rigorous years of my life, Johns Hopkins provided for me endless opportunities to expand the ceiling of my knowledge and passion while surrounding me with inspiring peers: something I’ll forever cherish and look fondly upon.",
      image: require("../assets/images/portfolio/jhu.png"),
      firstLinkPath: null,
      firstLinkText: null,
      secondLinkPath: null,
      secondLinkText: null,
    },
    {
      company: "Human Language Technology Center of Excellence",
      title:
        "Visiting Researcher/Part-time Researcher, May 2019 - February 2020",
      location: "Baltimore, Maryland",
      description:
        "During the summer, my team designed and constructed neural architectures to capture document-level ontologies to improve NER results through multi-task learning. We also improved multi-label topic identification F1 accuracies by 0.33 in Russian and 0.35 in Chinese using transfer learning and BERT embeddings. I continued this research independently but focused more on using deep metric learning to create document-level representations in low resource situations. ",
      image: require("../assets/images/portfolio/hltcoe.png"),
      firstLinkPath: require("../assets/resources/hltcoe_poster.pdf"),
      firstLinkText: "See Poster",
      secondLinkPath: null,
      secondLinkText: null,
    },
    {
      company: "Textron Systems",
      title: "Software Development Intern, August 2018 - May 2019",
      location: "Hunt Valley, Maryland",
      description:
        "My team investigated the usage of hyperspectral imaging in food allergen detection to create a commercially viable product. In doing so, we developed a pixel-by-pixel allergen detection algorithm that achieved 98% binary and 75% multinomial accuracy using machine learning techniques. We then created a web application to create heatmaps of allergen probability distribution on images to provide estimated allergen location.",
      image: require("../assets/images/portfolio/textron.png"),
      firstLinkPath: require("../assets/resources/textron_poster.pdf"),
      firstLinkText: "See Poster",
      secondLinkPath: require("../assets/resources/textron_heatmaps.pdf"),
      secondLinkText: "See Heatmaps",
    },
    {
      company: "Bloomberg School of Public Health",
      title: "Software Development Intern, May 2018 - August 2018",
      location: "Baltimore, Maryland",
      description:
        "Since this was my first software-related internship, this opportunity provided for me my first dive into software development in the real world. I initially developed data analysis and maintenance utilized by the epidemiology department; however, near the end of my internship, I built and demonstrated prototypes of progressive web apps that addressed the issues the department was facing regarding data reliability and accuracy. ",
      image: require("../assets/images/portfolio/bsph.png"),
      firstLinkPath: null,
      firstLinkText: null,
      secondLinkPath: null,
      secondLinkText: null,
    },
    {
      company: "Mesquite High School",
      title: "Class of 2016",
      location: "Gilbert, Arizona",
      description:
        "At Mesquite, I was heavily involved with the AP program as well as the Speech and Debate and Tennis teams. This culminated in graduating as Salutatorian with multiple honors and awards, most notably the 2016 Arizona Interscholastic Asssociation Student of the Year award, a distinction given to one graduating senior in the entire state annually. ",
      image: require("../assets/images/portfolio/mhs.png"),
      firstLinkPath: null,
      firstLinkText: null,
      secondLinkPath: null,
      secondLinkText: null,
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
        <section id="about" class="about-wrapper">
          <h1 class="title text-center">About</h1>
          <Container className="about-wrapper">
            <Row>
              <Col sm={3} lg={4}>
                <img
                  class="about-image"
                  src={require("../assets/images/portfolio/profpic.jpg")}
                  alt="profile"
                />
              </Col>

              <Col sm={9} lg={8}>
                <Container className="text-center about-text mx-auto">
                  <p class="text-left p-indent">
                    Hi! I’m currently a software engineer at Microsoft HQ in
                    Redmond, Washington. My academic and career interests
                    primarily revolve around Natural Language Processing,
                    specifically in human language acquisition/computational
                    language models and machine translation. Upon joining the
                    industry, I’ve also developed a particular affinity for
                    cloud computing resources and tools.{" "}
                  </p>
                  <p class="text-left p-indent">
                    Outside of my career, I enjoy cooking and baking, having
                    worked as a sushi chef during high school. I am also fond of
                    learning and studying new languages; in the past few years,
                    I’ve picked up some elementary French and Spanish while
                    furthering my proficiency in Mandarin Chinese. Take a look
                    at my interests further below if you want to learn more!
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
        <section id="timeline" class="timeline-wrapper">
          <h1 class="title text-center">Timeline</h1>
          <Timeline timelineItems={timelineItems}></Timeline>
        </section>
        <section id="interests" class="interests-wrapper">
          <h1 class="title text-center">Interests</h1>
          <InterestsBar interestLinks={interestLinks}></InterestsBar>
        </section>
      </body>
      <footer id="contact" class="contact-wrapper">
        <h1 class="title text-center">Contact Me</h1>
        <h4 class="text-center">
          I’m always happy to connect! See any of the social media below or
          contact me at simonzeng9 [at] gmail [dot] com.
        </h4>
      </footer>
    </div>
  );
};

export default MainPage;
