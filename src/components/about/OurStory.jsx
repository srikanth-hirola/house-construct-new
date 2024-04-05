/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import '../../assets/sass/aboutUs/_ourstory.scss'

const OurStory = () => {
  return (
    <div className="our-story-main">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col1">
            <h2 className="title">
              Our Story <br />
              Who we are
            </h2>
            <p className="description">
              Established in 1992, PT. Wahana Cipta operates as a General
              Contracting company with a footprint that we have planted
              throughout Indonesia. Initially, we focused on construction in the
              field of residential housing development in Jakarta. As the
              company grows, now we are present as a reliable...
            </p>
            <Link to='/services' className="btn btn-lg our-story-button">Read More</Link>
          </div>
          <div className="col-md-6 col2">
            <img className="our-story-image" src="/images/story-image.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
