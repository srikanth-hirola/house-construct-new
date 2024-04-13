import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowUpRight } from 'react-feather'
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import reviewData from '../../assets/data/review.json';
const data = reviewData;
const Whatwedo = () => {
  return (
    <>
      <div className="whatwedo-parent" style={{ backgroundImage: `url(/images/test-bg.webp)` }}>
        <div className="whatwedo-sub container-lg container-xl container-xxl" >

          <div className="row">
            <div className="col-md-6">
              <div className="whatwego-heading">
                <div>
                  <img src="../images/admin-quats.png" alt="" />
                </div>
                <div className="whatwedo-paragraph">
                  <h4>What our Client's Say</h4>
                  <p>
                    We Have A Wealth Of Experience Working As Main Building Contractors On All Kinds Of Projects, Big And Small, From Home Maintenance And Improvements To Extensions, Refurbishments And New Builds.
                  </p>
                </div>

                <button className='WhoweraeAbout-sub-viewmore-button'>
                  <Link to="">View More</Link>
                  <ArrowUpRight />
                </button>

              </div>
            </div>
            <div className="col-md-6 reviews-data">
              <div className="text-parent">
                <div className="container-lg container-xl container-xxl swiper-page-date">
                  <Swiper
                    slidesPerView={2}
                    // centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      640: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 1,
                      },
                      900: {
                        slidesPerView: 1,
                      },
                      1200: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    <br />
                    <br />
                    {data.map((info, index) => (
                      <SwiperSlide key={index} >

                        <div className="whatwedo-sec2-text" style={{ backgroundImage: `url(/quote-image.png)` }}>
                          <p>{info.description}</p>
                        </div>
                        <div className="profilecontent">
                          <div className=" profile-image">
                            <img src="../iconimage.jpg" />
                          </div>
                          <div className="profile-text">
                            <h5>{info.title}</h5>
                            <h6>{info.customer}</h6>
                          </div>
                          <div className="swiper-below-shape">
                            </div>
                        </div>

                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Whatwedo;
