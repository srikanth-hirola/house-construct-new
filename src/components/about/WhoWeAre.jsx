/* eslint-disable no-unused-vars */
import React from "react";
import '../../assets/sass/aboutUs/_whoweare.scss'
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div className="who-we-are-main">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h4 className="subtitle">WHO ARE WE</h4>
            <h3 className="title">
              Best Commercial Construction <br /> Company in Bangalore
            </h3>
            <p className="description">
              House-Construct is the best house Construction Company in
              Bangalore. But we are different in many ways. Apart from
              experience, transparency, quality and time conscious. We add a topping of Trust, Faith and elements of happiness. We are
              among the best in class residential and commercial construction
              companies in Bangalore with a combined 26 yrs of experience in
              construction.
            </p>
            {/* <p className="description">
             
            </p> */}
            <p className="description">
              House construct is associated with some brilliant architects and
              engineers from electrical/Civil/Structural backgrounds. So your
              project planning is done the professional way and avoids any
              failures which may occur during and post construction. Tailored
              Advice & Support. Flexibility to serve you better service.
            </p>
            <Link to='/contact-us' className="btn btn-lg btn-secondary see-all-team-button">Contact Us</Link>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-sm-6 col-md-6 col1">
                <img className="image1" src="/images/image5.webp" alt="" />
              </div>
              <div className="col-sm-6 col-md-6 col2">
                <img className="image3" src="/images/image4.webp" alt="" />
                <img className="image2" src="/images/image3.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
