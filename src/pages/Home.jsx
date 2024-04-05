/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Whatwedo from "../components/home/Whatwedo";
import Highquality from "../components/home/Highquality";
import Trustedpartners from "../components/home/Trustedpartners";
import Houseconstruct from "../components/home/Houseconstruct";
import Banner from '../components/home/Banner'
import Header from '../components/home/Header'
import DeliveryThings from '../components/home/DeliveryThings'
import Footer from '../components/home/Footer'
import UTube from '../components/home/UTube'
import HomeServices from '../components/home/HomeServices'
import HomeFeatures from '../components/home/HomeFeatures'
import HomeOffers from '../components/home/HomeOffers'
// import MyStepper from '../components/home/Stepper'
import HomeBlogs from '../components/home/HomeBlogs'
import HomePackages from "../components/home/HomePackages";
import { Modal } from "antd";
import MarqueeText from "../components/home/MarqueeText";
const Home = () => {
  // const [visibleModal, setVisibleModal] = useState(false);

  // useEffect (() => {
  //     const timer = setTimeout(() => {
  //         setVisibleModal(true);
  //     }, 8000 );

  //     return () => clearTimeout(timer);
  // }, []);

  // const handleModalClose = () => {
  //     setVisibleModal(false);
  // };
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
    <Header/>
      <Banner/>
      <Houseconstruct />
      <DeliveryThings/>
      <MarqueeText/>
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
    <HomeOffers/>
    {/* <MyStepper/> */}
      <HomePackages/>
    <HomeFeatures/>
    <Highquality />
    <Trustedpartners />
       
        <Whatwedo />
        <UTube/>
    <HomeBlogs/>
        
       
        <Footer/>
        {/* <Ourservices /> */}
      {/* <Besthome /> */}
    </>
  );
};

export default Home;
