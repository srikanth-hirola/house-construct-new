/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ServiceTiming = () => {
    const countRef = useRef(null);

    useEffect(() => {
        const counters = countRef.current.querySelectorAll(".counter");

        counters.forEach(counter => {
            let initial_count = 0;
            const final_count = parseInt(counter.dataset.count);
            
            let counting = setInterval(updateCounting, 1);
            
            function updateCounting() {
                if (initial_count < final_count) {
                    initial_count += Math.ceil(final_count / 100);
                    counter.innerText = initial_count.toLocaleString();
                } else {
                    clearInterval(counting);
                    counter.innerText = final_count.toLocaleString();
                }
            }
        });

        return () => {
            counters.forEach(counter => {
                clearInterval(counter.intervalId);
            });
        };
    }, []);

    return (
        <>
            <div className='service-timing-parent' ref={countRef}>
                <div className="service-timing-subparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row counting">
                                    <div className="col-md-6 col-sm-6 col-6">
                                        <div className='countdown-service'>
                                            <div>
                                                <h2 className="counter" data-count="440">0</h2>
                                                <p>Sq.ft of Built-up Area</p>
                                            </div>
                                        </div>
                                        <div className='countdown-service'>
                                            <div>
                                                <h2 className="counter" data-count="354">0</h2>
                                                <p>Projects Executed</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-6">
                                        <div className='countdown-service'>
                                            <div>
                                                <h2 className="counter" data-count="690">0</h2>
                                                <p>Sq.ft of Design Area Planned</p>
                                            </div>
                                        </div>
                                        <div className='countdown-service'>
                                            <div>
                                                <h2 className="counter" data-count="27">0</h2>
                                                <p>Years of Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className='timing-know'>
                                    <h6>WHAT WE DO</h6>
                                    <h1>Residential Construction Company</h1>
                                    <p>At our Residential Construction Company, we understand that building a home is more than just laying bricks; it's about turning dreams into reality. With meticulous attention to detail and a commitment to customer satisfaction, we ensure each project reflects the unique vision and lifestyle of our clients.</p>
                                    <Link to="/portfolio">Know More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceTiming;
