// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const ServiceShowcase = () => {
    return (
        <>
            <div className='service-showcase-parent'>
                <div className="service-showcase-subparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className='work-space-line'>
                                    <h1>Works Showcase</h1>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className='work-space-rich'>
                                    <p>With a rich history of successful projects, House Construct has excelled in constructing homes and commercial spaces, while also leading the way in architectural and structural design. Our expertise extends to interior planning, ensuring your spaces are both functional and aesthetically pleasing. We’ve built a legacy of turning visions into reality, one project at a time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slider-images'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={40}
                            freeMode={true}
                            autoplay={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                220: {
                                    slidesPerView: 2,
                                    spaceBetween: 5,
                                    centeredSlides:true,
                                },
                                540: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                    centeredSlides:true,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Autoplay, FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><div><Link to=""><img src="servicepage/showcase1.png" alt="" /></Link></div></SwiperSlide>
                            <SwiperSlide><div><Link to=""><img src="servicepage/showcase2.png" alt="" /></Link></div></SwiperSlide>
                            <SwiperSlide><div><Link to=""><img src="servicepage/showcase3.png" alt="" /></Link></div></SwiperSlide>
                            <SwiperSlide><div><Link to=""><img src="servicepage/showcase4.png" alt="" /></Link></div></SwiperSlide>
                            <SwiperSlide><div><Link to=""><img src="servicepage/showcase5.png" alt="" /></Link></div></SwiperSlide>
                            <SwiperSlide><div><Link to=""><img src="servicepage/showcase1.png" alt="" /></Link></div></SwiperSlide>
                            <SwiperSlide><div><Link to=""><img src="servicepage/showcase2.png" alt="" /></Link></div></SwiperSlide>
                            <SwiperSlide><div><Link to=""><img src="servicepage/showcase3.png" alt="" /></Link></div></SwiperSlide>
                            <SwiperSlide><div><Link to=""><img src="servicepage/showcase4.png" alt="" /></Link></div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceShowcase