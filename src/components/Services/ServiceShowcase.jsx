import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const ServiceShowcase = () => {
    return (
        <>
            <div className='service-showcase-parent'>
                <div className="service-showcase-subparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='work-space-rich'>
                                    <h6>WHAT WE DO</h6>
                                    <h1>Works Showcase</h1>
                                    <p>With a rich history of successful projects, House Construct has excelled in constructing homes and
                                        commercial spaces, while also leading the way in architectural and structural design. Our expertise extends to interior
                                        planning, ensuring your spaces are both functional and aesthetically pleasing. We’ve built a legacy of turning
                                        visions into reality, one project at a time.</p>
                                    <div className="button-style">
                                        <div className="button-page">
                                            <button>View More</button>
                                            <img src="/serimg/Icon.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='showcase-slide-images'>
                                    <>
                                        <Swiper
                                            slidesPerView={2}
                                            centeredSlides={true}
                                            spaceBetween={30}
                                            freeMode={true}
                                            autoplay={true}
                                            delay={3000}
                                            navigation={true}
                                            modules={[Autoplay, Navigation]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide><div>
                                                <img src="../servicepage/banner-section9.jpeg" alt="" />
                                                <div className='Construction-details-page'>
                                                    <h6>Construction</h6>
                                                    <h1>Pradeep’s Farm Villa</h1>
                                                    <div className="button-style">
                                                        <div className="button-page">
                                                            <button>View More</button>
                                                            <img src="/serimg/Icon.svg" width={20} height={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></SwiperSlide>
                                            <SwiperSlide><div>
                                                <img src="../servicepage/banner-section1.jpeg" alt="" />
                                                <div className='Construction-details-page'>
                                                    <h6>Construction</h6>
                                                    <h1>AK House</h1>
                                                    <div className="button-style">
                                                        <div className="button-page">
                                                            <button>View More</button>
                                                            <img src="/serimg/Icon.svg" width={20} height={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></SwiperSlide>
                                            <SwiperSlide><div><img src="../servicepage/banner-section2.jpeg" alt="" />
                                                <div className='Construction-details-page'>
                                                    <h6>Construction</h6>
                                                    <h1>Aniket’s Residency</h1>
                                                    <div className="button-style">
                                                        <div className="button-page">
                                                            <button>View More</button>
                                                            <img src="/serimg/Icon.svg" width={20} height={20} />
                                                        </div>
                                                    </div>
                                                </div></div></SwiperSlide>
                                            <SwiperSlide><div><img src="../servicepage/banner-section3.jpeg" alt="" />
                                                <div className='Construction-details-page'>
                                                    <h6>Construction</h6>
                                                    <h1>Abhisheak’s Residency</h1>
                                                    <div className="button-style">
                                                        <div className="button-page">
                                                            <button>View More</button>
                                                            <img src="/serimg/Icon.svg" width={20} height={20} />
                                                        </div>
                                                    </div>
                                                </div></div></SwiperSlide>
                                            <SwiperSlide><div><img src="../servicepage/banner-section4.jpeg" alt="" />
                                                <div className='Construction-details-page'>
                                                    <h6>Construction</h6>
                                                    <h1>Rahul Clayton</h1>
                                                    <div className="button-style">
                                                        <div className="button-page">
                                                            <button>View More</button>
                                                            <img src="/serimg/Icon.svg" width={20} height={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></SwiperSlide>
                                            <SwiperSlide><div><img src="../servicepage/banner-section5.jpeg" alt="" />
                                                <div className='Construction-details-page'>
                                                    <h6>Construction</h6>
                                                    <h1>DNN Corner House</h1>
                                                    <div className="button-style">
                                                        <div className="button-page">
                                                            <button>View More</button>
                                                            <img src="/serimg/Icon.svg" width={20} height={20} />
                                                        </div>
                                                    </div>
                                                </div></div></SwiperSlide>
                                            <SwiperSlide><div><img src="../servicepage/banner-section8.jpeg" alt="" />
                                                <div className='Construction-details-page'>
                                                    <h6>Construction</h6>
                                                    <h1>Anup’s Contemporary City Residence</h1>
                                                    <div className="button-style">
                                                        <div className="button-page">
                                                            <button>View More</button>
                                                            <img src="/serimg/Icon.svg" width={20} height={20} />
                                                        </div>
                                                    </div>
                                                </div></div></SwiperSlide>
                                            <SwiperSlide><div><img src="../servicepage/banner-section7.jpeg" alt="" />
                                                <div className='Construction-details-page'>
                                                    <h6>Construction</h6>
                                                    <h1>Rashmi Residency</h1>
                                                    <div className="button-style">
                                                        <div className="button-page">
                                                            <button>View More</button>
                                                            <img src="/serimg/Icon.svg" width={20} height={20} />
                                                        </div>
                                                    </div>
                                                </div></div></SwiperSlide>
                                        </Swiper>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceShowcase