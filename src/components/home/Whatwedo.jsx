import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {  Navigation } from "swiper/modules";

const Whatwedo = () => {
  return (
    <>
      <div className="whatwedo-parent">
        <div className="whatwedo-sub">
          <div className="whatwego-heading">
            <h4>What our Client's Say</h4>
            <div className="whatwedo-paragraph">
              <p>
              We Have A Wealth Of Experience Working As Main Building Contractors On All Kinds Of Projects, Big And Small, From Home Maintenance And Improvements To Extensions, Refurbishments And New Builds.
              </p>
            </div>
          </div>
          <div className="image-parent-whatwedo">
            <div className="whatwedo-image">
              <img src="/images/Section1.png" />
            </div>
            <div className="text-parent">
              <div className="container">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                //   pagination={{
                //     clickable: true,
                //   }}
                  navigation={true}
                  modules={[ Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="whatwedo-sec2-img1">
                      <img style={{visibility:'hidden'}} src="/images/after.png" />
                    </div>
                    <div className="whatwedo-sec2-text">
                      <p>
                      The team was very good and they give very good suggestion for people who are new to the civil works, i was not knowing much about civil field , but the whole team helped us in selecting in every stage. And even in interiors they have interior designers in-house. And whole project was finished in time . Thank you house contruct whole team
                      </p>
                    </div>
                    <div className="profilecontent">
                      <div className=" profile-image">
                        <img src="/images/after.png" />
                      </div>
                      <div className="profile-text">
                        <h5>Nidhi B S</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="whatwedo-sec2-img1">
                      <img src="/images/after.png" />
                    </div>
                    <div className="whatwedo-sec2-text">
                      <p>
                      Was fully satisfied by there work mainly the interior designing..just loved the way they did.The team suggestions for different structures was very class. Magnificent team work and budget friendly.Never thought my house would look so great... Thanks to the House-Construct team for the magnificent team work.
                      </p>
                    </div>
                    <div className="profilecontent">
                      <div className=" profile-image">
                        <img src="/images/after.png" />
                      </div>
                      <div className="profile-text">
                        <h5>Manasa Reddy</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="whatwedo-sec2-img1">
                      <img src="/images/after.png" />
                    </div>
                    <div className="whatwedo-sec2-text">
                      <p>
                      Reliable people for handing over the house construction project. Good quality monitoring systems and quality products are used. Entire construction activities are taken care by House Construct. No need to run behind the contractors. Very accommodating and ready to incorporate the changes suggested..
                      </p>
                    </div>
                    <div className="profilecontent">
                      <div className=" profile-image">
                        <img src="/images/after.png" />
                      </div>
                      <div className="profile-text">
                        <h5>Sumithra Naidu</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide><div className="whatwedo-sec2-img1">
                      <img src="/images/after.png" />
                    </div>
                    <div className="whatwedo-sec2-text">
                      <p>
                      I have used HC (House Construct) on many occasions in the past on various types of project and have found them to be very conscientious and thorough in their work with excellent attention to detail. I would happily recommend them as a trustworthy and sensibly priced construction company. A rare breed in today’s market place.
                      </p>
                    </div>
                    <div className="profilecontent">
                      <div className=" profile-image">
                        <img src="/images/after.png" />
                      </div>
                      <div className="profile-text">
                        <h5>Suresh Ammu</h5>
                      </div>
                    </div></SwiperSlide>
                  {/* <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide>
                  <SwiperSlide>Slide 7</SwiperSlide>
                  <SwiperSlide>Slide 8</SwiperSlide>
                  <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
              </div>
            </div>
          </div>
          {/* <div className="arrow-symbols">
            <img src="/images/arrowDark.png" />
            <img src="/images/arrowDark.svg" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Whatwedo;
