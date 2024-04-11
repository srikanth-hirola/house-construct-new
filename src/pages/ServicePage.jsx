/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Header from '../components/home/Header'
import ServicesBanner from '../components/Services/ServicesBanner'
import ServiceShowcase from '../components/Services/ServiceShowcase'
import Besthome from '../components/Services/Besthome'
import Ourservices from '../components/Services/Ourservices'
import Trustedpartners from '../components/home/Trustedpartners'
import ServiceTiming from '../components/Services/ServiceTiming'
import Footer from '../components/home/Footer'
import WhoWeAre from '../components/about/WhoWeAre'
import { Modal } from 'antd'
import ServiceOfficePage from './ServiceOfficePage'

const ServicePage = () => {
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
  return (
    <>
      <div>
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
        <ServicesBanner />
        <ServiceOfficePage/>
        {/* <Trustedpartners />
        <WhoWeAre /> */}
        <ServiceShowcase />
        <ServiceTiming/>
        <Ourservices />
        <Besthome />
        <Footer/>
      </div>
    </>
  )
}

export default ServicePage