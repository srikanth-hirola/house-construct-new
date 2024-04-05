/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { EffectCreative } from 'swiper/modules';
const Banner = () => {

  return (
    <>
      <div className="homepage-banner-parent">
        <div className="homepage-banner-subParent">
          <div className="swiper-service-page">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              
              autoplay={{
              delay: 2000, // 3 seconds delay
              disableOnInteraction: false // Autoplay will not be disabled when interaction with slider
            }}
            
            effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },

        }}
              navigation={false}
              modules={[Navigation, Autoplay, EffectCreative]}
              className="mySwiper"
            >
              <SwiperSlide>
              <div className='banner-content' style={{backgroundImage:`url('/images/banner-3.jpg')`}}>
                       <div className="banner-sub">
                       <h2>Crafting Exceptional Living Spaces in Bengaluru, Mysore, Chennai since 1997.</h2>
                        <p>Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</p>
                        <div className='banner-button'>
                            <Link>See Our Solutions</Link>
                        </div>
                       </div>
                        <div className="banner-overlay"></div> {/* Add overlay here */}
                    </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='banner-content' style={{backgroundImage:`url('/images/banner-1.jpg')`}}>
                       <div className="banner-sub">
                       <h2>Building Trust, Building Homes</h2>
                        <p>Trust is the cornerstone of every successful project at House Construct. With transparent communication, reliable service, and a commitment to exceeding expectations, we build more than just houses; we build lasting relationships.</p>
                        <div className='banner-button'>
                            <Link>See Our Solutions</Link>
                        </div>
                       </div>
                        <div className="banner-overlay"></div> {/* Add overlay here */}
                    </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='banner-content' style={{backgroundImage:`url('/images/banner-2.jpg')`}}>
                       <div className="banner-sub">
                       <h2>Your Journey to Exceptional Living.</h2>
                        <p>Join us in our commitment to a greener future. At House Construct, we prioritize sustainability in every aspect of our projects, from eco-friendly materials to energy-efficient solutions. Experience sustainable luxury with us.</p>
                        <div className='banner-button'>
                            <Link>See Our Solutions</Link>
                        </div>
                       </div>
                        <div className="banner-overlay"></div> {/* Add overlay here */}
                    </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
