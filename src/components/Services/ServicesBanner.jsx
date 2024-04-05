/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
const ServicesBanner = () => {
    return (
        <>
            <div className='services-banner-page'>
                <div className="service-banner-subparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='real-retate-page'>
                                    <h6>REAL ESTATE</h6>
                                    <h1>Find a perfect home you love..!</h1>
                                    <p>Home construction requires meticulous planning, skilled labor, and quality materials to create a safe and comfortable living space.</p>
                                    <div className='swiper-service-page'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            loop={true}
                                            autoplay={true}
                                            navigation={true}
                                            modules={[Navigation,Autoplay]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide><div>
                                                <Link to="/"><img src="/servicepage/banner-section1.jpeg" alt="" /></Link>
                                            </div></SwiperSlide>
                                            <SwiperSlide><div>
                                                <Link to=""><img src="/servicepage/banner-section2.jpeg" alt="" /></Link>
                                            </div></SwiperSlide>
                                            <SwiperSlide><div>
                                                <Link to=""><img src="/servicepage/banner-section3.jpeg" alt="" /></Link>
                                            </div></SwiperSlide>
                                            <SwiperSlide><div>
                                                <Link to=""><img src="/servicepage/banner-section4.jpeg" alt="" /></Link>
                                            </div></SwiperSlide>
                                            <SwiperSlide><div>
                                                <Link to=""><img src="/servicepage/banner-section5.jpeg" alt="" /></Link>
                                            </div></SwiperSlide>
                                            <SwiperSlide><div>
                                                <Link to=""><img src="/servicepage/banner-section6.jpeg" alt="" /></Link>
                                            </div></SwiperSlide>
                                            <SwiperSlide><div>
                                                <Link to=""><img src="/servicepage/banner-section7.jpeg" alt="" /></Link>
                                            </div></SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 dataform">
                                <div className='banner-form-services'>
                                    <form>
                                        <div className='for-enquiry'>
                                            <h2>Enquiry</h2>
                                            <p>
                                                Feel free to reach out for assistance or inquiries.</p>
                                        </div>
                                        <div className='input-tags-name'>
                                            <input type="text" placeholder='Please Enter Name' />
                                            <input type="text" placeholder='Please Enter Email' />
                                            <input type="text" placeholder='Please Enter Mobile Number' />
                                            <input type="text" placeholder='Please Enter Plot Size' />
                                            <input type="text" placeholder='Please Enter Plot No' />
                                        </div>
                                        <div className='input-tags-button'>
                                            <button>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='happy-coustomer-line row'>
                            <div className="col-md-6 col-sm-6 col-12">
                                <div className='page-width-date-customer'>
                                    <div className="contact-images">
                                        <div className='multi-iamges'>
                                            <img src="/servicepage/customericons.png" alt="" />
                                        </div>
                                        <div className='multi-iamges1'>
                                            <img src="/servicepage/customericons.png" alt="" />
                                        </div>
                                    </div>
                                    <h4>72k+ Happy
                                        <br /> Customers</h4>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-12">
                                <div className='page-width-date' >
                                    <div className='multi-iamges'>
                                        <img src="/servicepage/houseconst.png" alt="" />
                                    </div>
                                    <h4>200+ New <br />
                                        Listings Everyday!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesBanner