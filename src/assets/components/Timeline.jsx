import React from "react";
import { Link } from "react-router-dom";

export default ({ timelineItems }) => {
  return (
    <div class="container">
      <div class="column">
        {timelineItems &&
          timelineItems.map(
            (
              {
                company,
                title,
                location,
                description,
                image,
                firstLinkPath,
                firstLinkText,
                secondLinkPath,
                secondLinkText,
              },
              index
            ) => (
              <div>
                <div class="portfolio-item mx-auto">
                  <img class="img-fluid" src={image} alt="cannot find" />
                  <p>{company}</p>
                  <p>{title}</p>
                  <p>{location}</p>
                  <p>{description}</p>
                  <a href={firstLinkPath} target="_blank">
                    {firstLinkText}
                  </a>
                  <br></br>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};
