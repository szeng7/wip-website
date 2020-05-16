import React from "react";
import { Link } from "react-router-dom";

export default ({ interestLinks }) => {
  /*
  A dynamic bar of image buttons that lead to other pages. 
   */
  return (
    <div class="container">
      <div class="row">
        {interestLinks &&
          interestLinks.map(({ title, caption, image, link }, index) => (
            <div class="col-md-6 col-lg-4 mb-5">
              <Link to={link}>
                <div class="portfolio-item mx-auto">
                  <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white">
                      <p>{caption}</p>
                    </div>
                  </div>
                  <img class="img-fluid" src={image} alt="cannot find" />
                </div>
              </Link>
              <p>{title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
