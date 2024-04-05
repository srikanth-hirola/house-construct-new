/* eslint-disable no-unused-vars */
// import React from 'react'
// import Header from '../components/home/Header';
// import PortfolioBanner from '../components/PortfolioIndividual/PortfolioBanner'
// import PortfolioIndividualContent from '../components/PortfolioIndividual/PortfolioIndividualContent'
// import Footer from '../components/home/Footer';

// const PortfolioIndividual = () => {
//   return (
//     <>
//     <Header/>
//     <PortfolioBanner/>
//     <PortfolioIndividualContent/>
//     <Footer/>
//     </>

//   )
// }

// export default PortfolioIndividual
import React, { useEffect, useState } from 'react';
import Header from '../components/home/Header';
import PortfolioBanner from '../components/PortfolioIndividual/PortfolioBanner';
import PortfolioIndividualContent from '../components/PortfolioIndividual/PortfolioIndividualContent';
import Footer from '../components/home/Footer';
import projectData from '../assets/data/projects.json'; // Import project data
import { Modal } from 'antd';

const PortfolioIndividual = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    const modalShownBefore = localStorage.getItem('modalShown');

    if (!modalShownBefore) {
      // Show modal after 5 seconds for the initial visit
      const timer = setTimeout(() => {
        setVisibleModal(true);
        // Set flag in localStorage to indicate modal has been shown
        localStorage.setItem('modalShown', 'true');
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      // Show modal after 10 seconds on subsequent visits
      const timer = setTimeout(() => {
        setVisibleModal(true);
      }, 12000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleModalClose = () => {
    setVisibleModal(false);
  };
  // Assuming you have a way to determine the selected project from the URL or other means
  const selectedProject = projectData[0]; // Assuming the first project is selected, you might replace this with your logic
console.log("selectedProject",selectedProject)
  return (
    <>
     <Modal
                    title=""
                    visible={visibleModal}
                    onOk={handleModalClose}
                    onCancel={handleModalClose}
                    className='cautious-title'
                    footer={null}
                >
              
                    <div className=" dataform">
                                <div className='banner-form-services'>
                                    <form>
                                        <div className='for-enquiry'>
                                            <h2>Enquiry</h2>
                                            <p>
                                                Feel free to reach out for assistance or inquiries.</p>
                                        </div>
                                        <div className='input-tags-name'>
                                            <input type="text" placeholder='Please Enter Name' />
                                            <input type="text" placeholder='Please Enter Email' />
                                            <input type="text" placeholder='Please Enter Mobile Number' />
                                            <input type="text" placeholder='Please Enter Plot Size' />
                                            <input type="text" placeholder='Please Enter Plot No' />
                                        </div>
                                        <div className='input-tags-button'>
                                            <button>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    {/* <strong id='scam-tt' >Hirola Infotech Solutions</strong> */}
                </Modal>
      <Header />
      <PortfolioBanner  project={selectedProject} />
      {/* Pass the selected project as props to PortfolioIndividualContent */}
      <PortfolioIndividualContent project={selectedProject} />
      <Footer />
    </>
  );
}

export default PortfolioIndividual;
