import React from 'react'
import { ArrowUpRight } from 'react-feather'
import { Link } from 'react-router-dom'

const AboutHouseConstruct = () => {
    return (
        <>
            <div className='AboutHouseConstruct-parent'>
            <div className="row p-0 m-0">
                        <div className="col-md-6">
                            <div className="WhoweraeAbout-sub">
                                <h5>ABOUT</h5>
                                <h3>House Construct</h3>
                                <p>House-Construct is the best house Construction Company in Bangalore. But we are different in many ways. Apart from experience, transparency, quality and time conscious. We add a topping of Trust, Faith and elements of happiness. We are among the best in class residential and commercial construction companies in Bangalore with a combined 26 yrs of experience in construction. House construct is associated with some brilliant architects and engineers from electrical/Civil/Structural backgrounds. So your project planning is done the professional way and avoids any failures which may occur during and post construction. Tailored Advice & Support. Flexibility to serve you better service.</p>
                                <button className='WhoweraeAbout-sub-viewmore-button'>
                                    <Link to="">View More</Link>
                                    <ArrowUpRight/>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="WhoweraeAbout-sub-2">
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default AboutHouseConstruct