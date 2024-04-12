// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from 'react'

// const PortfolioIndividualContent = ({project}) => {
//    console.log("projectsqd",project)
    
//     return (
//         <>

//             <div className='PortfolioIndividualContent-parent'>
//                 <div className="PortfolioIndividualContent-sub">
//                     <div className="row">
                   
//                         <div className="col-md-6">
//                             <div className='PortfolioIndividual-content-image-section'>
//                                 <div className="col-md-12">
//                                     <div className="indi-port-sec">
//                                         {/* <div className=""> */}
//                                            {
//                                             project.images.map((data)=>(
//                                                <>
//                                                <div className='PortfolioIndividual-content-image-left'>
//                                                 <img src={data.img} alt="" />
//                                             </div>
//                                                </>
//                                             ))
//                                            }
                                            
//                                         {/* </div> */}

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-md-6'>
//                             <div className='PortfolioIndividual-content-section'>
//                                 <div className='PortfolioIndividual-content-section-sub1'>
//                                     <button>{project.project}</button>
//                                     <h1>About the Project</h1>
//                                     <p>{project.description}</p>
//                                 </div>
//                                 <div className='PortfolioIndividual-content-section-sub2'>
//                                     <h3>Project Details</h3>
//                                     <div className='PortfolioIndividual-content-section-sub2-sub'>
//                                         <div className='projectdetails-bg-below'>
//                                             <div className='PortfolioIndividual-content-section-sub2-sub-time'>
//                                                 <div className='PortfolioIndividual-content-section-sub2-sub-time-parent'>
//                                                     <div className='portfolio-clock-image'>
//                                                         <img src="/portfolioclockicon.png" alt="" />
//                                                     </div>
//                                                     <div className='date-palce-text'>
//                                                         <h6>Date -place</h6>
//                                                         <p>{project.date} - {project.place}</p>
//                                                     </div>
//                                                 </div>
//                                                 <h3>01</h3>
//                                             </div>
//                                             <div className='PortfolioIndividual-content-section-sub2-sub-time'>
//                                                 <div className='PortfolioIndividual-content-section-sub2-sub-time-parent'>
//                                                     <div className='portfolio-clock-image'>
//                                                         <img src="/portfoliousericon.png" alt="" />
//                                                     </div>
//                                                     <div className='date-palce-text'>
//                                                         <h6>TOTAL AREA</h6>
//                                                         <p>{project.area}</p>
//                                                     </div>
//                                                 </div>
//                                                 <h3>02</h3>
//                                             </div>
//                                             <div className='PortfolioIndividual-content-section-sub2-sub-time no-border-section'>
//                                                 <div className='PortfolioIndividual-content-section-sub2-sub-time-parent '>
//                                                     <div className='portfolio-clock-image'>
//                                                         <img src="/portfolioprojecticon.png" alt="" />
//                                                     </div>
//                                                     <div className='date-palce-text'>
//                                                         <h6>PROJECT</h6>
//                                                         <p>{project.project} - {project.status}</p>
//                                                     </div>
//                                                 </div>
//                                                 <h3>03</h3>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='PortfolioIndividual-content-section-bottom'>
//                                         <div className='PortfolioIndividual-content-section-bottom-sub'>
//                                             <div className='PortfolioIndividual-content-section-bottom-sub-image'>
//                                                 <img src="/portfolioind3.png" alt="" />
//                                             </div>
//                                             <div className='PortfolioIndividual-content-section-bottom-sub-text'>
//                                                 <p>Next PROJECT</p>
//                                                 <h5>1,320 sqft Modern Flat</h5>
//                                             </div>
//                                         </div>
//                                             <div className='portfolio-arrow-icon'>
//                                                 <img src="arrowicon.png" alt="" />
//                                             </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default PortfolioIndividualContent


import React from 'react'

const PortfolioIndividualContent = () => {
  return (
    <>
    <div className='PortfolioIndividualContent-parent'>
        <div className="container-lg container-xl container-xxl">
            <div className="row">
                <div className="col-md-4">
                   <div className='portfolioIndividual-sub1'>
                   <div className='d-flex gap-1'>
                        <h5>Place :</h5>
                        <p>Bangalore</p>
                    </div>
                    <div className='d-flex gap-1'>
                        <h5>Total area :</h5>
                        <p> 7000 sq.ft</p>
                    </div>
                    <div className='d-flex gap-1'>
                        <h5>Project Type :</h5>
                        <p>Residential</p>
                    </div>
                    <div className='d-flex gap-1'>
                        <h5>Project Status :</h5>
                        <p>Ongoing</p>
                    </div>
                   </div>
                </div>
                <div className="col-md-8">
                    <div className="PortfolioIndividual-sub2">
                        <div className='title'>
                            <p>PROJECT DETAILS</p>
                            <h1>About the Project</h1>
                        </div>
                        <div className='description'>
                            <p>Nestled in the heart of Bangalore, Abhisheak’s Residency is a contemporary residential project spanning 5800 square feet, symbolizing a seamless blend of comfort and style. As of November 12, 2022, the project is dynamically underway, promising an elevated living experience in one of India’s vibrant urban centers.</p>
                            <p>This ongoing residential venture is designed to meet the diverse needs of modern living, emphasizing both functionality and aesthetics. The 5800 sq ft space is meticulously planned to optimize natural light and ventilation, ensuring a comfortable and welcoming environment for its future inhabitants. The project, focused on redefining urban living, is a testament to architectural innovation and a commitment to quality.</p>
                            <p>Stay tuned for updates on Abhisheak’s Residency, where the city’s pulse meets the tranquility of a thoughtfully designed home. The ongoing status reflects the dedication of the construction team to uphold the highest standards, promising a residence that goes beyond the ordinary. Abhisheak’s Residency is poised to become a landmark, setting new standards for contemporary living in Bangalore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PortfolioIndividualContent