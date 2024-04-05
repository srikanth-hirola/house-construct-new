/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const DeliveryThings = () => {
    return (
        <>
            <div className='delivery-Things-parent'>
                <div className="delivery-Things-subparent">
                    <div className='section-width'>
                        <div className="row">
                            <div className="col-md-6 datapage">
                                <div className='delivery-iamges-section'>

                                    <div className='d-flex '>
                                        <div className='year-experience-data'>
                                            <h1>25+ </h1>
                                            <h6>Years Experience</h6>
                                        </div>
                                        <div className='imagepage-1'>
                                            <img src="/images/home-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className='behind-image'>
                                        <img src="/images/home-2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 datavisible">
                                <div className='d-flex-forline'>
                                    <img src="/deliverySection/outputarrow.png" alt="" />
                                    <h6>HOUSE CONSTRUCT</h6>
                                </div>
                                <div className='delivering-data'>
                                    <h1>Delivering Exceptional Living Spaces since 1997</h1>
                                </div>
                                <div className='house-warming-page'>
                                    <p>House Construct is not just a construction company; it’s a legacy of excellence. Since 1997, we’ve been dedicated to creating exceptional living spaces for our clients. With over two decades of experience, 400+ satisfied clients, and a commitment to innovation, quality, and sustainability, we’ve crafted a reputation that stands the test of time.</p>
                                    <p>Our journey has been marked by a passion for turning dreams into reality, a commitment to designing and building with precision, and a relentless pursuit of the highest standards in construction. Every project we undertake is a testament to our unwavering dedication to delivering living spaces that are nothing short of exceptional.</p>
                                </div>
                                <div className='see-project-button'>
                                    <Link to='/portfolio' > See Projects</Link>
                                    <div className='up-arrow-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <path d="M12.79 4.02403V11.528C12.79 11.7307 12.718 11.9067 12.574 12.056C12.43 12.2054 12.254 12.28 12.046 12.28C11.838 12.28 11.6594 12.2054 11.51 12.056C11.3607 11.9067 11.286 11.7307 11.286 11.528V5.83203L4.07004 13.064C3.93137 13.2027 3.75537 13.272 3.54204 13.272C3.32871 13.272 3.15004 13.2 3.00604 13.056C2.86204 12.912 2.79004 12.736 2.79004 12.528C2.79004 12.32 2.86471 12.1414 3.01404 11.992L10.23 4.77603H4.53404C4.33137 4.77603 4.15804 4.70137 4.01404 4.55203C3.87004 4.4027 3.79804 4.2267 3.79804 4.02403C3.79804 3.82137 3.87004 3.64537 4.01404 3.49603C4.15804 3.3467 4.33137 3.27203 4.53404 3.27203H12.038C12.2407 3.27203 12.4167 3.3467 12.566 3.49603C12.7154 3.64537 12.79 3.82137 12.79 4.02403Z" fill="white" />
                                        </svg>
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

export default DeliveryThings