import React from 'react'

const BannerBelowSection = () => {
  return (
    <>
    <div className='BannerBelowsection-parent'>
        <div className="BannerBelow-title text-center">
            <p>OUR TEAM</p>
            <h1>Leadership Board</h1>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className='absolute-image'>
                    </div>
                    <div className='banner-below-image-parent'>
                        <div className='banner-below-image-parent-sub'>
                            <img src="/images/Venkatesh-G.webp" alt="" />
                        </div>
                        <div className='banner-below-image-parent-content'>
                            <h3>Venkatesh G</h3>
                            <p>SENIOR INDUSTRIALIST</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className='absolute-image'>
                    </div>
                    <div className='banner-below-image-parent'>
                        <div className='banner-below-image-parent-sub'>
                            <img src="/images/team2.png" alt="" />
                        </div>
                        <div className='banner-below-image-parent-content'>
                            <h3>RV Mohanan</h3>
                            <p>SENIOR MANAGEMENT PROFESSIONAL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default BannerBelowSection;