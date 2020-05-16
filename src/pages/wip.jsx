import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const WIPPage = () => {
  return (
    <div className="portfolio">
      <nav
        class="navbar navbar-expand-lg text-uppercase fixed-top"
        id="mainNav"
      >
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav test">
              <li class="nav-item mx-0 mx-lg-1">
                <a
                  class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a
                  class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a
                  class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          <h1 class="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>
          <p class="masthead-subheading font-weight-light mb-0">
            Graphic Artist - Web Designer - Illustrator
          </p>
          <Button> HI </Button>
        </div>
      </header>
      <section class="page-section portfolio" id="portfolio">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-5">
              <div
                class="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal1"
              >
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src={require("../assets/images/portfolio/cake1.jpg")}
                  alt="canot find"
                />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <div
                class="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal2"
              >
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src={require("../assets/images/portfolio/cake1.jpg")}
                  alt=""
                />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <div
                class="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal3"
              >
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src={require("../assets/images/portfolio/cake1.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-white">
            About
          </h2>
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>
          <div class="row">
            <div class="col-lg-4 ml-auto">
              <p class="lead">
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for
                easy customization.
              </p>
            </div>
            <div class="col-lg-4 mr-auto">
              <p class="lead">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section" id="contact">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>
        </div>
      </section>
      <footer class="footer text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Location</h4>
              <p class="lead mb-0">
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Around the Web</h4>
              <a class="btn btn-outline-light btn-social mx-1" href="#!">
                <i class="fab fa-fw fa-facebook-f"></i>
              </a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!">
                <i class="fab fa-fw fa-twitter"></i>
              </a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!">
                <i class="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!">
                <i class="fab fa-fw fa-dribbble"></i>
              </a>
            </div>
            <div class="col-lg-4">
              <h4 class="text-uppercase mb-4">About Freelancer</h4>
              <p class="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by <a href="http://startbootstrap.com">Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WIPPage;
