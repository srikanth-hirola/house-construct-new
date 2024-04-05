/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from 'react'
import "../../assets/sass/aboutUs/_aboutusbanner.scss"

const Aboutbanner = () => {
  return (
    <div className='about-us-banner-main'>
        <div className="about-us-banner-background">
            <div className="row">
                <div className="col-md-5 about-us-banner-left-section">
                    <h5 className='about-us-banner-subtitle'>About Us</h5>
                    <h1 className='about-us-banner-title'>House Construct: Crafting Excellence Since 1997</h1>
                    <p className='about-us-banner-description'>Join us in our mission to redefine the concept of home. Discover the difference that experience, expertise, and passion can make in creating living spaces that are nothing short of exceptional.</p>
                </div>
                <div className="col-md-7">
                    <div className='about-us-banner-image-parent'>
                        <img className='about-us-banner-image' src="/images/about-us-banner-image.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutbanner
