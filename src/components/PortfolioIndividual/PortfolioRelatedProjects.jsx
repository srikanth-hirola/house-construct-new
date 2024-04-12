import React from 'react';
import projectData from '../../assets/data/projects.json';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
const PortfolioRelatedProjects = () => {
    const data = projectData
    return (
        <>
            <div className='Home-WorksWeOffer-parent'>
                <div className="container-lg container-xl container-xxl">
                <div className='Home-WorksWeOffer-title'>
                    <div className="row p-0 m-0">
                        <div className="col-md-6">
                            <h6>MORE PROJECTS</h6>
                            <h2>Related Projects</h2>
                        </div>
                    </div>
                </div>

                <div className='slider-images'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        freeMode={true}
                        autoplay={true}
                        navigation={{
                            clickable: true,
                        }}
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
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                        className="mySwiper"
                    >
                        {data.map((info, index) => (
                            <SwiperSlide key={index}>
                                <div className='Home-works-offer-sub-parent'>
                                    <Link to=''>
                                        <div className='Home-works-offer-sub-image'>
                                            <img src={info.img} alt={info.title} />
                                            <div className="overlay">
                                                <p>{info.title}</p>
                                                <h5>{info.project}</h5>
                                                <Link to=''>VIEW MORE</Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                </div>
            </div>
        </>

    )
}

export default PortfolioRelatedProjects