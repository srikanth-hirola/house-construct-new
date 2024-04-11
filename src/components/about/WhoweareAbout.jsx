import React from 'react'
import { ArrowUp, ArrowUpRight } from 'react-feather'
import { Link } from 'react-router-dom'

const WhoweareAbout = () => {
    return (
        <>
            <div className='WhoweareAbout-parent'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="WhoweraeAbout-sub">
                                <h5>WHO WE ARE</h5>
                                <h3>Best Commercial Construction
                                    Company in Bangalore</h3>
                                <p>House-Construct is the best house Construction Company in Bangalore. But we are different in many ways. Apart from experience, transparency, quality and time conscious. We add a topping of Trust, Faith and elements of happiness. We are among the best in class residential and commercial construction companies in Bangalore with a combined 26 yrs of experience in construction. House construct is associated with some brilliant architects and engineers from electrical/Civil/Structural backgrounds. So your project planning is done the professional way and avoids any failures which may occur during and post construction. Tailored Advice & Support. Flexibility to serve you better service.</p>
                                <button className='WhoweraeAbout-sub-viewmore-button'>
                                    <Link to="">View More</Link>
                                    <ArrowUpRight/>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="WhoweraeAbout-sub-2">
                                <div className="row">
                                    <div className="col-sm-6 col-md-6">
                                        <div className='WhoweraeAbout-sub-2-content'>
                                            <h2>440K+</h2>
                                            <h5>Sq.ft of Built-up Area</h5>
                                            <hr />
                                            <p>We constructed over 440k+ square feet of space, demonstrating our ability .</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <div className='WhoweraeAbout-sub-2-content'>
                                            <h2>690K+</h2>
                                            <h5>Sq.ft of Design Area Planned</h5>
                                            <hr />
                                            <p>Our expertise is evident in planning 690,000+ square feet of innovative and functional designs.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <div className='WhoweraeAbout-sub-2-content'>
                                            <h2>354+</h2>
                                            <h5>Projects Executed</h5>
                                            <hr />
                                            <p>With 27+ years in the industry, our deep understanding of construction complexities ensures successful projects.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <div className='WhoweraeAbout-sub-2-content'>
                                            <h2>27+</h2>
                                            <h5>Years of Experience</h5>
                                            <hr />
                                            <p>With 27+ years in the industry, our deep understanding of construction complexities ensures successful projects.</p>
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

export default WhoweareAbout