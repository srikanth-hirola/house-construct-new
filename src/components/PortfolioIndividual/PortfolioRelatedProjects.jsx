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
import OffersSwiper from '../home/OffersSwiper';
const PortfolioRelatedProjects = () => {
    const data = projectData
    return (
        <>
        <div className='PortfolioRelatedProjects-parent'>
        <div className='Home-WorksWeOffer-parent'>
                <div className="container-lg container-xl container-xxl">
                <div className='Home-WorksWeOffer-title'>
                    <div className="row p-0 m-0">
                        <div className="col-md-6">
                            <h6 className='text-dark'>MORE PROJECTS</h6>
                            <h2 className='text-dark'>Related Projects</h2>
                        </div>
                    </div>
                </div>

               <OffersSwiper/>
                </div>
            </div>
        </div>
           
        </>

    )
}

export default PortfolioRelatedProjects