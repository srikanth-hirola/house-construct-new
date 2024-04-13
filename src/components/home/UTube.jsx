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
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

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
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{

                            0: {
                                slidesPerView: 1,
                            },

                            480: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Autoplay, FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <iframe
                                src="https://www.youtube.com/embed/WSz1QLBfTSk?si=fv22uvwDwGxTlIEo"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowfullscreen=""
                            />
                        </SwiperSlide>

                        <SwiperSlide><iframe src="https://www.youtube.com/embed/vt5hIrsWnxQ?si=Pv2GUj_VIt0KyJnB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/9i6nlwqfZU8?si=znWhSZb354Ll2bxm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/iwANwd62UCI?si=Xub3Q9WbO2tYelB1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/JNE87x_1AD4?si=RjJydrVPs92ATBbv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/VjvPex6_4cY?si=r2ukmO1HPm79Qrbm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></SwiperSlide>
                        <SwiperSlide><iframe src="https://www.youtube.com/embed/J3_rWTx0RRY?si=0Jm3nhXXr5hGfAQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
