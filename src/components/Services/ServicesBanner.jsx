import React, { useRef, useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
const ServicesBanner = () => {
    return (
        <>
            <div className='services-banner-page'>
                <div className="service-banner-subparent" style={{ backgroundImage: "url('/servicepage/servicebanner.jpg')" }}>
                    <div className='service-banner-text'>
                        <div className='text-line'>
                            <p>Home</p>
                            <h6>.</h6>
                            <p>Services</p>
                        </div>
                        <h1>Services</h1>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ServicesBanner