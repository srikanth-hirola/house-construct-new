/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer-main-parent'>
                <div className="footer-main-subparent">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-4">
                                <div className='footer-logo-iamge'>
                                    <div>
                                        <img src="/mainLogo.png" alt="" />
                                    </div>

                                    <p>House-Construct is the best house Construction Company in Bangalore. But we are different in many ways. Apart from experience, transparency, quality and time conscious.</p>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <h5>Office</h5>
                                <div className='icon-footer-iamges'>
                                    <div>
                                        <img src="/footers-images/phone-call.png" alt="" />
                                    </div>
                                    <p>+91 7557557857​</p>
                                </div>
                                <div className='icon-footer-iamges'>
                                    <div>
                                        <img src="/footers-images/mail.png" alt="" />
                                    </div>
                                    <p>SUPPORT@HOUSECONSTRUCT.IN​</p>
                                </div>
                                <div className='icon-footer-iamges'>
                                    <div>
                                        <img src="/footers-images/user-check.png" alt="" />
                                    </div>
                                    <p>#73, 3RD FLOOR, SHREELEKHA COMPLEX, WOC ROAD, MAHALAXMIPURAM, BANGALORE, KARNATAKA 560086​</p>
                                </div>
                                <div className='icon-footer-iamges'>
                                    <div>
                                        <img src="/footers-images/pie-chart.png" alt="" />
                                    </div>
                                    <p>MON - SAT: 10 AM - 7 PM SUN: CLOSED​</p>
                                </div>

                            </div>
                            <div className="col-md-2">
                                <h5>Quick Links</h5>

                                <div className='footer-row-2-techinal'>
                                    <p><Link to="/">Home</Link></p>
                                    <p><Link to="/about">About Us</Link></p>
                                    <p><Link to="/blogs">Blogs</Link></p>
                                    <p><Link to="/services">Services</Link></p>
                                    <p><Link to="/contact-us">Contact Us</Link></p>
                                </div>

                            </div>
                            <div className="col-md-2">
                                <h5>Social Links</h5>
                                <div className='footer-row-2-techinal'>
                                    <p><Link>Instagram</Link></p>
                                    <p><Link>Whatsup</Link></p>
                                    <p><Link>Facebook</Link></p>
                                    <p><Link>Twitter</Link></p>
                                    <p><Link>Linkedin</Link></p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='house-construct-line'>
                            <p>© 2024 House Construct. All rights reserved. By Hirola Infotech Solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer