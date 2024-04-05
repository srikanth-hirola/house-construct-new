/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const HomeServices = () => {
  return (
    <>
    <div className='HomeServices-parent'>
        <div className="container">
            <div className="HomeServices-sub">
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="HomeServices-sub-content ">
                            <h3>Services</h3>
                            <p>Providing solutions for construction,Interior, and Architecture Design.</p>
                            <div className='Home-services-viewMore'>
                            <Link to='/services'>All Services</Link>
                            <div className='Home-services-image'>
                                <img src="viewmorebutton.svg" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="HomeServices-sub-content">
                            <h5>Residential Construction</h5>
                            <div className='Home-services-viewMore'>
                            <Link to='/services'>View More</Link>
                            <div className='Home-services-image'>
                                <img src="viewmorebutton.svg" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="HomeServices-sub-content">
                            <h5>Commercial Construction</h5>
                            <div className='Home-services-viewMore'>
                            <Link to='/services'>View More</Link>
                            <div className='Home-services-image'>
                                <img src="viewmorebutton.svg" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="HomeServices-sub-content">
                            <h5>Interior Designing</h5>
                            <div className='Home-services-viewMore'>
                            <Link to='/services'>View More</Link>
                            <div className='Home-services-image'>
                                <img src="viewmorebutton.svg" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="HomeServices-sub-content">
                        <h5>Plan Approvals</h5>
                            <div className='Home-services-viewMore'>
                            <Link to='/services'>View More</Link>
                            <div className='Home-services-image'>
                                <img src="viewmorebutton.svg" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                    <div className="HomeServices-sub-content">
                            <h5>Rennovation</h5>
                            <div className='Home-services-viewMore'>
                            <Link to='/services'>View More</Link>
                            <div className='Home-services-image'>
                                <img src="viewmorebutton.svg" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="HomeServices-sub-content">
                            <h5>Eco-Friendly Houses</h5>
                            <div className='Home-services-viewMore'>
                            <Link to='/services'>View More</Link>
                            <div className='Home-services-image'>
                                <img src="viewmorebutton.svg" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="HomeServices-sub-content">
                            <h5>Consultation</h5>
                            <div className='Home-services-viewMore'>
                            <Link to='/services'>View More</Link>
                            <div className='Home-services-image'>
                                <img src="viewmorebutton.svg" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default HomeServices