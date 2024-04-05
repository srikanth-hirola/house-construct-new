/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import projectData from '../../assets/data/projects.json';
const data = projectData;
const HomeOffers = () => {
  return (
    <>
<div className='Home-WorksWeOffer-parent'>
            <div className='container-lg container-xl container-xxl'>
                <div className='Home-WorksWeOffer-title'>
                   <div className="row">
                    <div className="col-md-6">
                    <h2>Works Showcase</h2>
                    <h6>Works We Offer</h6>
                    </div>
                    <div className="col-md-6">
                        <Link to='/portfolio'>View More</Link>
                    </div>
                   </div>
                </div>
                <div className="row">
                    {data.slice(0,6).map((info, index) => (
                        <div className="col-sm-6 col-md-4" key={index}>
                            <div className='Home-works-offer-sub-parent'>
                                <div className='Home-works-offer-sub-image'>
                                    <img src={info.img} alt="" />
                                    <div className="overlay">
                                        <p>{info.title}</p>
                                        <h5>{info.project}</h5>
                                        <Link to=''>VIEW MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeOffers