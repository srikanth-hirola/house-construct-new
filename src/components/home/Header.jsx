/* eslint-disable no-unused-vars */
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//     return (
//         <>
//             <div className='Homepage-header-parent'>
//                 <div className="Homepage-header-subParent">
//                     <div className='row'>
//                         <div className="col-md-12">
//                             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                                 <div className="container overflow-hidden">
//                                     <div className='main-logo-image col-md-3'>
//                                         <img src="/mainLogo.png" alt="" />
//                                     </div>
//                                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                         <span className="navbar-toggler-icon"></span>
//                                     </button>
//                                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                             <li className="nav-item">
//                                                 <Link className="nav-link active" to="/">Home</Link>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <Link className="nav-link active"  to="/about">About Us</Link>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <Link className="nav-link active"  to="/services">Services</Link>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <Link className="nav-link active"  to="/portfolio">Portfolio</Link>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <Link className="nav-link active"  to="/blogs">Blogs</Link>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <Link className="nav-link active"  to="/contact-us">Conatct Us</Link>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                                         <div className='header-log-in-button'>
//                                             <Link >Lets Build</Link>
//                                         </div>
//                                         <div className='header-log-in-button-two'>
//                                         <Link>Get In Touch</Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Header
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Drawer } from 'antd';
import {MenuOutlined} from '@ant-design/icons'
const { Header } = Layout;

const CustomHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
    <Header className="Homepage-header-parent">
      <div className="Homepage-header-subParent">
        <div className='row'>
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container overflow-hidden">
                <div className='main-logo-image col-md-3'>
                 <Link to='/'>
                 <img src="/mainLogo.png" alt="" />
                 </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                         <div className='header-log-in-button'>
                                             <Link >Lets Build</Link>
                                         </div>
                                         <div className='header-log-in-button-two'>
                                         <Link to='/contact-us' >Get In Touch</Link>
                                         </div>
                                     </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Drawer for mobile */}
      <div className="mobile-menu">
        {/* <Button type="primary" className="button"> */}
        <MenuOutlined  onClick={() => setDrawerVisible(true)} style={{ fontSize: '24px', color: '#000' }} />
        {/* </Button> */}
        <Drawer
          title="Menu"
          placement="right"
          closable={true}
          onClose={handleDrawerClose}
          visible={drawerVisible}
          className="drawer-menu"
        >
          <Menu theme="dark" mode="vertical">
            <Menu.Item key="1">
              <Link to="/" className="nav-link">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about" className="nav-link">About Us</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/services" className="nav-link">Services</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/blogs" className="nav-link">Blogs</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/contact-us" className="nav-link">Contact Us</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </Header>
  );
};

export default CustomHeader;
