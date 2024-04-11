import React from "react";
import Banner from "../components/contactus/Banner";
import Locations from "../components/contactus/Locations";
import Careers from "../components/contactus/Careers";
import Experts from "../components/contactus/Experts";
import Header from '../components/home/Header'
import Footer from "../components/home/Footer";

import Maps from "../components/contactus/Maps";
import Location from "../components/contactus/Locations";
const Contactus = () => {
  return (
    <>
    <Header />
      <Banner />
      {/* <Experts /> */}
      {/* <Locations /> */}
      <Location/>
      <Careers />
      <Maps/>
      <Footer />
    </>
  );
};

export default Contactus;
