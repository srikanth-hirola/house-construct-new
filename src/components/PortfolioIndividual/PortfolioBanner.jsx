/* eslint-disable no-unused-vars */
import React from "react";
import slugify from 'slugify';

const PortfolioBanner = ({ project, location }) => {
  const slugifyTitle = (title) => {
    return slugify(title, { lower: true, replacement: '-', remove: /[*+~.()'"!:@]/g }) + "-new";
  };
  return (
    <>
      {project?.filter(item => slugifyTitle(item?.title) === location)?.map(project =>
        <div className="contactus-banner">
          {console.log(project)}
          <div
            className="contactus-banner-sub"
            style={{ backgroundImage: "url('/contactus/30.png')" }}
          >
            <div className="contactus-banner-heading">
              <h5>{project?.title}</h5>
              <p>
                {project?.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioBanner;
