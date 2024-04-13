import React from 'react'

const PortfolioGallery = () => {
    return (
        <>
            <div className='PortfolioGallery-parent'>
                <h2 className='text-center'>Project Gallery</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <div className='main-images'>
                                <img src="../portfolio/abhisheak/abhisheak-1.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className='main-images'>
                            <img src="../portfolio/abhisheak/abhisheak-2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="Secondrowgallery-images">
                    <div className="row">
                        <div className="col-sm-4 col-md-4">
                            <div className='gallery-sub-images'>
                                <img src="../portfolio/abhisheak/abhisheak-3.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className='gallery-sub-images'>
                                <img src="../portfolio/abhisheak/abhisheak-4.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className='gallery-sub-images'>
                                <img src="../portfolio/abhisheak/abhisheak-5.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className='gallery-sub-images'>
                                <img src="../portfolio/abhisheak/abhisheak-6.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className='gallery-sub-images'>
                                <img src="../portfolio/abhisheak/abhisheak-7.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className='gallery-sub-images'>
                                <img src="../portfolio/abhisheak/abhisheak-8.webp" alt="" />
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioGallery