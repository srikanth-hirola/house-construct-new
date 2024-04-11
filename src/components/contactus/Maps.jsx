import React from 'react'
import { Link } from 'react-router-dom'

const Maps = () => {
    return (
        <>
            <div className='ContactUs-maps-parent'>
                <div className="container">
                <div className="row">
    <div className="col-md-6">
        <div className="contactUs-banner-form">
            <div className="contactUs-banner-form-sub">
                <h2>Talk to Our Experts</h2>
                <form action="">
                    <input type="text" placeholder="Your Name*" /><br />
                    <input type="tel" placeholder="Mobile Number*" /><br />
                    <input type="email" placeholder="Email ID*" /><br />
                    <input type="text" placeholder="Plot Location" /><br />
                    <input type="text" placeholder="Plot Size" /><br />
                    {/* Assuming the Link component is used properly elsewhere */}
                    <button><Link to="/">Submit</Link></button>
                </form>
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <div className="ContactUs-location-map">
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31100.683668145484!2d77.54990700000002!3d12.998345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d5b2072d399%3A0x7d22d0c8b1ead12!2sHouse-Construct!5e0!3m2!1sen!2sus!4v1712732514353!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
</div>

                </div>
            </div>
        </>
    )
}

export default Maps