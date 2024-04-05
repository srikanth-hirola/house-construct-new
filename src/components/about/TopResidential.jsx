/* eslint-disable no-unused-vars */
import React from "react";
import '../../assets/sass/aboutUs/_topresidential.scss'

const TopResidential = () => {
  return (
    <div className="topresidential-main">
      <div className="container">
        <div className="row first-row">
          <h1 className="title">
            Top Residential Construction <br />Company in Bangalore
          </h1>
        </div>
        <div className="row second-row">
          <div className="col-md-6">
            <div className="row">
              <img className="icons" src="/images/ab-1.png" alt="" />
              <h3 className="title">Excellence</h3>
              <p className="description">
                Our pursuit of excellence is relentless. We set high standards
                and deliver quality, precision, and meticulous attention to
                detail in every project.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <img className="icons" src="/images/ab-2.png" alt="" />
              <h3 className="title">Integrity</h3>
              <p className="description">
                Integrity is the foundation of our relationships. We conduct
                ourselves with honesty, transparency, and ethical practices,
                fostering trust with our clients and partners.t.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <img className="icons" src="/images/ab-3.png" alt="" />
              <h3 className="title">Customer Satisfaction</h3>
              <p className="description">
                Your satisfaction is not just a goal; it's our driving force. We
                listen, understand, and exceed your expectations, making your
                vision a reality.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <img className="icons" src="/images/ab-4.png" alt="" />
              <h3 className="title">Sustainability</h3>
              <p className="description">
                We take our responsibility to the environment seriously. Our
                commitment to sustainable construction practices reflects our
                dedication to a greener, more responsible future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopResidential;
