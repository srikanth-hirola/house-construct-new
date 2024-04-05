import React from "react";
import '../../assets/sass/aboutUs/_ourteam.scss';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const OurTeam = () => {
  return (
    <div className="our-team-main">
      <div className="container">
        <div className="row">
          <h1 className="title">OUR TEAM</h1>
          <h4 className="subtitle">Leadership Board</h4>
        </div>
        <div className="swiper-div">
          <Swiper
          className="swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                320: {
                    slidesPerView: 1
                },
                540: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                }
            }}
          >
            <SwiperSlide className="swiper-slider">
                <div className="team-card">
                    <img className="team-image" width="100%" src="/images/team1.png" alt="" />
                </div>
                <div className="title-card">
                    <h5 className="name">
                        Venkatesh G
                    </h5>
                    <p className="designation">
                    SENIOR INDUSTRIALIST
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
                <div className="team-card">
                    <img className="team-image" width="100%" src="/images/team2.png" alt="" />
                </div>
                <div className="title-card">
                    <h5 className="name">
                        Venkatesh G
                    </h5>
                    <p className="designation">
                    SENIOR INDUSTRIALIST
                    </p>
                </div>
                </SwiperSlide>
            <SwiperSlide className="swiper-slider">
            <div className="team-card">
                    <img className="team-image" width="100%" src="/images/team1.png" alt="" />
                </div>
                <div className="title-card">
                    <h5 className="name">
                        Venkatesh G
                    </h5>
                    <p className="designation">
                    SENIOR INDUSTRIALIST
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
            <div className="team-card">
                    <img className="team-image" width="100%" src="/images/team2.png" alt="" />
                </div>
                <div className="title-card">
                    <h5 className="name">
                        Venkatesh G
                    </h5>
                    <p className="designation">
                    SENIOR INDUSTRIALIST
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
            <div className="team-card">
                    <img className="team-image" width="100%" src="/images/team1.png" alt="" />
                </div>
                <div className="title-card">
                    <h5 className="name">
                        Venkatesh G
                    </h5>
                    <p className="designation">
                    SENIOR INDUSTRIALIST
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
            <div className="team-card">
                    <img className="team-image" width="100%" src="/images/team2.png" alt="" />
                </div>
                <div className="title-card">
                    <h5 className="name">
                        Venkatesh G
                    </h5>
                    <p className="designation">
                    SENIOR INDUSTRIALIST
                    </p>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
