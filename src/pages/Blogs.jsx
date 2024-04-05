/* eslint-disable no-unused-vars */
import React from 'react'
import Blogsbanner from '../components/Blogs/Blogsbanner'
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import Blogscontentcards from '../components/Blogs/Blogscontentcards';

const Blogs = () => {
  return (
    <>
    <Header/>
    <Blogsbanner/>
    <Blogscontentcards/>
    <Footer/>
    </>

  )
}

export default Blogs;