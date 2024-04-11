import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="contactus-banner">
        <div
          className="contactus-banner-sub"
          style={{ backgroundImage: "url('/contactus/30.png')" }}
        >
          <div className="row">
            <div className="col-md-5 about-us-banner-left-section">
              <div className="about-us-banner-subtitle d-flex gap-3">
              <Link><p>Home</p></Link>
              <Link><p>. Contact Us</p></Link>
              </div>
              <Link><h1 className='about-us-banner-title'>Contact Us</h1></Link>
            </div>
            <div className="col-md-6">
              <div className="contactUs-banner-form">
               <div className="contactUs-banner-form-sub">
               <h2>Let's Talk to Our Experts</h2>
                <form action="">
                  <input type="text" placeholder="Your Name*" /><br />
                  <input type="tele" placeholder="Mobile Number*"/><br />
                  <input type="email" placeholder="Email ID*"/><br />
                  <input type="text" placeholder="Plot Location"/><br />
                  <input type="text" placeholder="Plot Size"/><br />
                  <button><Link>Submit</Link></button>
                </form>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
