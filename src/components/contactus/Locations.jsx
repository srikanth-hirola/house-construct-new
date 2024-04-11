import React from "react";
import "../../assets/sass/aboutUs/_location.scss";
import { MapPin, Mail, Clock, PhoneCall } from "react-feather";
const Location = () => {
  return (
    <div className="location-main-contactus">
      {/* <div className="row first-row p-0 m-0">
        <p>GET IN TOUCH WITH US</p>
        <h1 className="title">
          Our Office Locations
        </h1>
      </div> */}
      <div className="location-cards">
        <div className="col-md-12 col-lg-10">
          <div className="row main-row">
            <div className=" col-md-4 col-sm-4">
              <h3 className="location-type">Our Corporate Office​</h3>
              <hr />
              <div className="row">
              <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/map-pin.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <MapPin />
                  </div>
                  <p className="address">
                    #73, 3rd Floor, Shreelekha Complex, WOC Road, Mahalaxmipuram,
                    Bangalore, Karnataka 560086.
                  </p>
                </div>
                <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/phone-call.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <PhoneCall />
                  </div>
                  <p className="number">+91 9110658440</p>
                </div>
                <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/mail.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <Mail />
                  </div>
                  <p className="email">care@houseconstruct.in</p>
                </div>
                <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/clock.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <Clock />
                  </div>

                  <p className="timings">MON – SAT10 AM to 7 PM</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-md-4 col-sm-4">
              <h3 className="location-type">Our Branch Office</h3>
              <hr />
              <div className="row">
              <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/map-pin.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <MapPin />
                  </div>
                  <p className="address">
                    #73, 3rd Floor, Shreelekha Complex, WOC Road, Mahalaxmipuram,
                    Bangalore, Karnataka 560086.
                  </p>
                </div>
                <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/phone-call.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <PhoneCall />
                  </div>
                  <p className="number">+91 9110658440</p>
                </div>
                <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/mail.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <Mail />
                  </div>
                  <p className="email">care@houseconstruct.in</p>
                </div>
                
                <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/clock.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <Clock />
                  </div>

                  <p className="timings">MON – SAT10 AM to 7 PM</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-md-4 col-sm-4">
              <h3 className="location-type">Our Branch Office​</h3>
              <hr />
              <div className="row">
              <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/map-pin.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <MapPin />
                  </div>
                  <p className="address">
                    #73, 3rd Floor, Shreelekha Complex, WOC Road, Mahalaxmipuram,
                    Bangalore, Karnataka 560086.
                  </p>
                </div>
                <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/phone-call.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <PhoneCall />
                  </div>
                  <p className="number">+91 9110658440</p>
                </div>
                <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/mail.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <Mail />
                  </div>
                  <p className="email">care@houseconstruct.in</p>
                </div>
                <div className="row flex-nowrap">
                  {/* <img className="icons" src="/images/clock.svg" alt="" /> */}
                  <div className="feather-icons-parent">
                    <Clock />
                  </div>

                  <p className="timings">MON – SAT10 AM to 7 PM</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
