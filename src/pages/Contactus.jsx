import React from "react";
import Banner from "../components/contactus/Banner";
import Locations from "../components/contactus/Locations";
import Careers from "../components/contactus/Careers";
import Experts from "../components/contactus/Experts";
import Header from '../components/home/Header'
import Footer from "../components/home/Footer";
import Location from "../components/about/Location";
const Contactus = () => {
  return (
    <>
    <Header />
      <Banner />
      <Experts />
      {/* <Locations /> */}
      <Location />
      <Careers />
      <Footer />
    </>
  );
};

export default Contactus;
