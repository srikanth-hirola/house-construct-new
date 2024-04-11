/* eslint-disable no-unused-vars */
import React from "react";
import '../../assets/sass/aboutUs/_topresidential.scss'
import { Shield, Sunrise, User, Users } from 'react-feather';
const TopResidential = () => {
  return (
    <div className="topresidential-main">
      <div className="container">
        <div className="row first-row">
          <p>OUR VALUES</p>
          <h1 className="title">
            Top Residential Construction Company in Bangalore
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
                  <h3 className="title">Excellence</h3>
                  <p className="description">
                    Our pursuit of excellence is relentless. We set high standards
                    and deliver quality, precision, and meticulous attention to
                    detail in every project.
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
                  <h3 className="title">Integrity</h3>
                  <p className="description">
                    Integrity is the foundation of our relationships. We conduct ourselves with honesty, transparency, and ethical practices, fostering trust with our clients and partners.
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
                  <User />
                </div>
                <div className="topresidential-description">
                  <h3 className="title">
                    Customer Satisfaction</h3>
                  <p className="description">
                    Your satisfaction is not just a goal; it's our driving force. We listen, understand, and exceed your expectations, making your vision a reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="topresidential-description-parent">
                <div className="topresidential-icon">
                  <Sunrise/>
                </div>
                <div className="topresidential-description">
                  <h3 className="title">Sustainability</h3>
                  <p className="description">
                    We take our responsibility to the environment seriously. Our commitment to sustainable construction practices reflects our dedication to a greener, more responsible future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopResidential;
