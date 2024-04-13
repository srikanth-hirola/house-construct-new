import React from 'react'
import slugify from "slugify";
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import projectData from '../../assets/data/projects.json';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const OffersSwiper = () => {
    const data = projectData; // Slice to get the first 6 items from projectData
    const slugifyTitle = (title) => {

        return slugify(title, { lower: true, replacement: '-', remove: /[*+~.()'"!:@]/g }) + "-new";
    };
    return (
        <>
            <div className='slider-images'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    autoplay={true}
                    loop={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    breakpoints={{
                        220: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                            centeredSlides: true,
                        },
                        540: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                            centeredSlides: true,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }}
                    className="mySwiper"
                >
                    {data.map((info, index) => (
                        <SwiperSlide key={index}>
                            <div className='Home-works-offer-sub-parent'>
                                <Link to={`/portfolio/${slugifyTitle(info.title)}`}>
                                    <div className='Home-works-offer-sub-image'>
                                        <img src={info.img} alt={info.title} />
                                        <div className="overlay">
                                            <p>{info.title}</p>
                                            <h5>{info.project}</h5>
                                            <Link to={`/portfolio/${slugifyTitle(info.title)}`}>VIEW MORE</Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default OffersSwiper