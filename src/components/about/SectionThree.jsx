/* eslint-disable no-unused-vars */
import React from 'react';
import '../../assets/sass/aboutUs/_sectionthree.scss'
import { Link } from 'react-router-dom';

const SectionThree = () => {
  return (
    <div className="section-three-main">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 col1">
                    <img className='main-image' src="/images/image1.webp" alt="" />
                    <div className="card">
                        <div className="card-image-div">
                          <img className='card-image' src="/images/Venkatesh-G.webp" alt="" />
                        </div>
                        <h3 className='card-name'>Venkatesh G</h3>
                        <p className='card-description'>More than 20 years of experience in the field architecture and has worked on project up to 100+</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5 col2">
                    <h4 className='subtitle'>ABOUT US</h4>
                    <h2 className='title'>House Construct</h2>
                    <p className='description'>
                    At House Construct, we’re passionate about turning your dreams into reality. With years of experience and a commitment to excellence, we offer a one-stop solution for all your construction needs. From initial design to final handover, our dedicated team works tirelessly to bring your vision to life. Our expertise in construction management, landscape design, and interior design ensures that every aspect of your project is handled with care and precision. We take pride in our work and are driven by the desire to create homes that reflect your individuality and stand the test of time. Choose House Construct, and let us build the home you’ve always imagined.
                    </p>
                    <Link to='/portfolio' className="btn btn-lg section-three-button">View More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionThree