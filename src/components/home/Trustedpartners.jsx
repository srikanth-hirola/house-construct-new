/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from "react-fast-marquee";

const Trustedpartners = () => {
    // Define image sources
    const images = [
        "/images/image 24.png",
        "/images/image 25.png",
        "/images/image 26.png",
        "/images/image 27.png",
        "/images/image 28.png",
        "/images/image 29.png",
        "/images/image 25.png",
        "/images/image 26.png",
        "/images/image 27.png",
        "/images/image 28.png",
    ];

    return (
        <div className="trusted-partners-parent">
            <div className="trusted-partners-sub">
                <div className="container">
                    <div className="trustes-partners-heading">
                        <h2>Our Trusted Partners</h2>
                        <p>Achieving victorious designs through successful collaborations.</p>
                    </div>
                    </div>
                </div>

                <Marquee velocity={100}>
                    {images.map((image, index) => (
                        <div className="col-md-2" key={index}>
                            <div className='trustedpartners-brandlogos'>
                                <img src={image} alt={`Image ${index + 24}`} />
                            </div>
                        </div>
                    ))}
                </Marquee>

            </div>
   
    );
};

export default Trustedpartners;
