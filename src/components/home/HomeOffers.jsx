/* eslint-disable no-unused-vars */
import React from 'react';
import OffersSwiper from './OffersSwiper';

const HomeOffers = () => {

    return (
        <div className='Home-WorksWeOffer-parent' style={{ backgroundImage: `url(/images/test-bg.webp)` }}>
            <div className='Home-WorksWeOffer-title'>
                <div className="row p-0 m-0">
                    <div className="col-md-6">
                        <h6>Works We Offer</h6>
                        <h2>Works Showcase</h2>

                    </div>
                </div>
            </div>

            <OffersSwiper />
        </div>
    );
}

export default HomeOffers;
