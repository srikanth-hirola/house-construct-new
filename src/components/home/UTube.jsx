/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay,FreeMode, Pagination } from 'swiper/modules';

export default function UTube() {
    const [autoplayEnabled, setAutoplayEnabled] = useState(false);

    // Enable autoplay after 3 seconds
    setTimeout(() => {
        setAutoplayEnabled(true);
    }, 3000);
    return (
        <>
            <div className="utube-parent">
                <div className="utube-subparent">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        autoplay={true}
                        grabCursor={true}
                        delay={3000}
                        pagination={{
                            clickable: true,
                        }}
                        
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            320: {
                                slidesPerView: 1,
                            },

                            480: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            900: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Autoplay,FreeMode, Pagination]}
                        className="mySwiper"
                    >
<SwiperSlide>
                        <iframe
                            src="https://www.youtube-nocookie.com/embed/J3_rWTx0RRY?autoplay=1&controls=0&mute=1&loop=1&playlist=J3_rWTx0RRY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </SwiperSlide>

                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
