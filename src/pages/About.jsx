/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Aboutbanner from '../components/about/Aboutbanner'
import WhoWeAre from '../components/about/WhoWeAre'
import SectionThree from '../components/about/SectionThree'
import OurStory from '../components/about/OurStory'
import VMsec from '../components/about/VMsec'
import OurTeam from '../components/about/OurTeam'
import TopResidential from '../components/about/TopResidential'
import Location from '../components/about/Location'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Modal } from 'antd'
import MarqueeText from '../components/home/MarqueeText'

const About = () => {
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
    <Header/>

    <Aboutbanner />
    <WhoWeAre />
    <SectionThree />
    <MarqueeText/>
    <OurStory />
    <VMsec />
    <OurTeam />
    <TopResidential />
    <Location />
    <Footer/>
    </>
  )
}

export default About