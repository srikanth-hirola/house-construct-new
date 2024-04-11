import React from "react";
import "../../assets/sass/aboutUs/_vmsec.scss";
import { Shield, Sunrise, User, Users } from 'react-feather';
const VMsec = () => {
  return (
    <div className="vm-sec-main">
      <div className="container">
      <div className="row first-row">
        <p>OUR VISION AND MISSION</p>
        <h1 className="title">
        Best Home Construction Company in Bangalore
        </h1>
      </div>
      <div className="row second-row">
        <div className="col-md-6">
          <div className="row">
            <div className="topresidential-description-parent">
              <div className="topresidential-icon">
                <Shield />
              </div>
              <div className="topresidential-description">
                <h3 className="title">Our Vision</h3>
                <p className="description">
                At House Construct, our vision is to be at the forefront of the construction industry, setting new standards and redefining what is possible. We strive for a sustainable and environmentally responsible future, where our practices inspire positive change. Our vision is to continue transforming dreams into reality, inspiring others, and creating exceptional spaces that stand as enduring landmarks of our dedication to craftsmanship and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="topresidential-description-parent">
              <div className="topresidential-icon">
                <Users />
              </div>
              <div className="topresidential-description">
                <h3 className="title">Our Mission</h3>
                <p className="description">
                Our mission is to be your unwavering partner in turning your vision into a living, breathing reality. We aim to craft exceptional spaces that are a true reflection of your unique needs and aspirations. Through our steadfast commitment to quality, integrity, and innovation, we aspire to set new benchmarks in the construction industry that not only meet but exceed your dreams. Your dream home is our mission, and we are here to make it come true.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      </div>
    </div>
  );
};

export default VMsec;
