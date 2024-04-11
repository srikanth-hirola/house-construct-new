import React from "react";
import { ArrowUpRight } from "react-feather";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
      <div className="contactus-carres-page-parent">
        <div className="contactus-carres-page-parent-sub">
        <div className="row">
              <div className="col-md-6">
                <div className="contactus-careers-left">
                <div className="contactus-page-sec1-text1">
                  <div className="contactus-bag-image-careers">
                    <img src="/images/big-ic.png" alt="" />
                  </div>
                  <p>CAREERS</p>
                </div>
                <div className="contactus-page-sec1-text2">
                  <h5>Join Our Team.</h5>
                </div>
                <div className="contactus-page-sec1-text3">
                  <p>We believe in the power of collaboration and innovation. If you’re passionate about construction, design, and making dreams come true, we welcome you to join our dynamic team. We offer a supportive and creative work environment where your skills and ideas can flourish. Together, we can continue to build exceptional spaces and create lasting impressions. Explore exciting opportunities with House Construct and be a part of our journey to excellence.</p>
                </div>
                <div className="contactus-page-sec1-button">
                  <button className='WhoweraeAbout-sub-viewmore-button'>
                    <Link to="">View More</Link>
                    <ArrowUpRight />
                  </button>
                </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contactus-carres-page-sec2-img">
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
