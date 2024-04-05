import React from "react";

const Experts = () => {
  return (
    <>
      <div className="contactus-experts-parent">
        <div className="contactus-experts-sub">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contactus-experts-heading">
                  <h5>Talk to Our Experts</h5>
                </div>
                <div className="row input-parents">
                  <div className="col-md-6 fields-parents">
                    <p>First Name</p>

                    <input type="text" />
                  </div>
                  <div className="col-md-6 fields-parents">
                    <p>Last Name</p>
                    <input type="text" />
                  </div>
                </div>
                <div className="row input-parents">
                  <div className="col-md-6 fields-parents">
                    <p>Email</p>
                    <input type="text" />
                  </div>
                  <div className="col-md-6 fields-parents">
                    <p>Phone number</p>
                    <input type="text" />
                  </div>
                </div>
                <div className="row input-parents">
                  <div className="col-md-6 fields-parents">
                    <p>Plot Location</p>

                    <input type="text" />
                  </div>
                  <div className="col-md-6 fields-parents">
                    <p>Plot Size</p>
                    <input type="text" />
                  </div>
                </div>
                <div className="fields-parents-msg">
                  <p>Message</p>
                  <input type="text" />
                </div>
                <div className="check-box-text-parent">
                  <div className="check-box-parent">
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="chexkbox-text">
                    <p>I accept the Terms</p>
                  </div>
                </div>
                <div className="crrers-submit-button">
                  <button>Submit</button>
                </div>
              </div>
              <div className="col-md-6 carrer-det-parent">
                <div className="row">
                  <div className="col-md-5 car-details">
                    <img src="/Experts/Email.svg" />
                    <p>Email</p>
                    <p>care@houseconstruct.in</p>
                  </div>
                  <div className="col-md-5 car-details">
                    <img src="/Experts/Phone.svg" />
                    <p>Phone</p>
                    <p>+91 9110658440</p>
                  </div>
                  <div className="experts-card-par">
                    <div className="col-md-11 card-details">
                      <img src="/Experts/Pin.svg" />
                      <p>Office</p>
                      <p>
                        #73, 3rd Floor, Shreelekha Complex, WOC Road,
                        Mahalaxmipuram, Bangalore, Karnataka 560086.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experts;
