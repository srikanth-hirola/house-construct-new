/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import projectData from '../../assets/data/projects.json';
import slugify from 'slugify';
const data = projectData;
const PortfolioMain = () => {
    const slugifyTitle = (title) => {
        return slugify(title, { lower: true, replacement: '-', remove: /[*+~.()'"!:@]/g }) + "-new";
      };
  return (
    <>
<div className='Home-WorksWeOffer-parent'>
            <div className='container'>
                <div className='Home-WorksWeOffer-title'>
                    <h2>Works Showcase</h2>
                    <h6>Works We Offer</h6>
                </div>
                <div className="row">
                    {data.map((info, index) => (
                        <div className="col-md-4" key={index}>
                            <div className='Home-works-offer-sub-parent'>
                                <div className='Home-works-offer-sub-image'>
                                    <img src={info.img} alt="" />
                                    <div className="overlay">
                                        <p>{info.project}</p>
                                        <h5>Works Showcase</h5>
                                        <Link to={`/portfolio/${slugifyTitle(info.title)}`}>VIEW MORE</Link>
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

export default PortfolioMain