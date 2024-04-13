import React from 'react'
import slugify from "slugify"
const PortfolioGallery = ({ project, location }) => {
    const slugifyTitle = (title) => {
        return slugify(title, { lower: true, replacement: '-', remove: /[*+~.()'"!:@]/g }) + "-new";
    };
    return (
        <>
            {project?.filter(item => slugifyTitle(item?.title) === location)?.map(project =>

                <div className='PortfolioGallery-parent'>
                    <h2 className='text-center'>Project Gallery</h2>

                    <div className="container">
                        <div className="row">
                            {project?.mainImg?.map((profileImg, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className='main-images'>
                                        <img src={profileImg?.img} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="Secondrowgallery-images">
                            <div className="row">
                                {project?.images?.map((profileImg, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className='gallery-sub-images'>
                                            <img src={profileImg.img} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default PortfolioGallery