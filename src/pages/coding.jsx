import React from "react";
import Sidebar from "../assets/components/Sidebar.jsx";
import { Navbar, Nav, Container, Row, Col, Table } from "react-bootstrap";

function getLinkIcons(links) {
    if (links.length === 1) {
        return (
            <Container className="icons-container">
                <Row>
                    <a href={links[0]}>
                        <img
                            className="icon"
                            src={require("../assets/icons/github-white.png")}
                            alt="github"
                        ></img>
                    </a>
                </Row>
            </Container>
        );
    } else {
        return (
            <Container className="icons-container">
                <Row>
                    <a href={links[0]}>
                        <img
                            className="icon"
                            src={require("../assets/icons/github-white.png")}
                            alt="github"
                        ></img>
                    </a>

                    <a href={links[1]}>
                        <img
                            className="icon"
                            src={require("../assets/icons/external-white.png")}
                            alt="external"
                        ></img>
                    </a>
                </Row>
            </Container>
        );
    }
}

function getTableContents() {
    return (
        <tbody>
            {projectInfo.map(
                (
                    { date, status, title, description, techStack, links },
                    index
                ) => (
                    <tr key={index} className="custom-row">
                        <td>{date}</td>
                        <td>{status}</td>
                        <td>{title}</td>
                        <td>{description}</td>
                        <td>{techStack.join(" - ")}</td>
                        <td>{getLinkIcons(links)}</td>
                    </tr>
                )
            )}
        </tbody>
    );
}

const CodingPage = () => {
    return (
        <div className="coding-wrapper">
            <div className="coding">
                <Navbar>
                    <Nav.Link
                        className="custom-nav-link-coding d-flex align-items-center"
                        href="./"
                        style={{ textDecoration: "none" }}
                    >
                        <img
                            className="icon-back"
                            src={require("../assets/icons/back-white.png")}
                            alt="back"
                        ></img>
                        <h4 className="d-inline back-text">
                            Back to Portfolio
                        </h4>
                    </Nav.Link>
                </Navbar>
                <Sidebar></Sidebar>
                <Container fluid className="coding-container">
                    <Row>
                        <Col>
                            <div className="title-wrapper">
                                <h1 className="title">Projects</h1>
                                <img
                                    className="title-line"
                                    src={require("../assets/icons/horizontal-line-short-gold.png")}
                                    alt="horizontal line"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ offset: 1, span: 10 }} className="table-col">
                            <Container className="table-container">
                                <Table
                                    printable
                                    responsive
                                    hover
                                    className="project-table"
                                >
                                    <thead>
                                        <tr className="table-header">
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Tech Stack</th>
                                            <th>Links</th>
                                        </tr>
                                    </thead>
                                    {getTableContents()}
                                </Table>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CodingPage;

const projectInfo = [
    {
        date: "06/2020",
        status: "WIP",
        title: "Personal Website",
        description:
            "What you're looking at right now! Experimenting with some techstacks.",
        techStack: ["React", "Bootstrap", "HTML/CSS/JavaScript"],
        links: [
            "https://github.com/szeng7/wip-website",
            "https://szeng7.github.io/wip-website/",
        ],
    },
    {
        date: "04/2020",
        status: "Completed",
        title: "ABR Algorithms with ML",
        description:
            "Using reinforcement learning to improve how video streaming systems operate",
        techStack: ["Tensorflow", "JavaScript", "Dashjs", "Python (Flask)"],
        links: ["https://github.com/blueleafysky/CloudFinalProject"],
    },
    {
        date: "04/2020",
        status: "Completed",
        title: "Tracking/Predicting COVID-19 using Twitter",
        description:
            "Using machine learning techniques to predict COVID-19 case counts based on Twitter data",
        techStack: ["Tensorflow", "PyTorch"],
        links: ["https://github.com/szeng7/ir-final"],
    },
    {
        date: "12/2019",
        status: "Completed",
        title: "Foreign Accent Conversion",
        description:
            "Using neural networks for TTS (text-to-speech) conversion with someone's speech style",
        techStack: ["Tensorflow"],
        links: ["https://github.com/szeng7/foreign-accent-conversion"],
    },
    {
        date: "09/2019",
        status: "Completed",
        title: "Movie Recommendation System",
        description:
            "Using subgenre clustering to improve movie recommendation systems",
        techStack: ["Tensorflow"],
        links: ["https://github.com/tyang27/PennAppsXX"],
    },
    {
        date: "06/2019",
        status: "WIP",
        title: "Instagram Caption Generator",
        description:
            "Training a neural network to identify objects within a given image and use them to create an appropriate caption",
        techStack: ["Tensorflow"],
        links: ["https://github.com/szeng7/instagram-caption-generator"],
    },
    {
        date: "02/2019",
        status: "Completed",
        title: "Amazon Reviews Sentiment Analysis",
        description:
            "Determining the feeling (positive or negative) conveyed by Amazon reviews",
        techStack: ["scikit-learn"],
        links: ["https://github.com/szeng7/SentiAnalysis"],
    },
    {
        date: "02/2019",
        status: "Completed",
        title: "FoodLab",
        description:
            "Android app that takes inputs of ingredients and outputs appropriate recipes",
        techStack: ["Android", "Mobile Development"],
        links: ["https://github.com/szeng7/FoodLab"],
    },
];
