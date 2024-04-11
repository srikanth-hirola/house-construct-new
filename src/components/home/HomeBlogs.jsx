/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Blogscontentcards from '../Blogs/Blogscontentcards';
import { ArrowUpRight } from 'react-feather';
import { Link } from 'react-router-dom';
const HomeBlogs = () => {
  const currentBlogData = [
    {
      title: 'Building your API Stack',
      author: 'Lana Steiner',
      date: '18 Jan 2022',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating,testing, and managing them.',
      image: 'blogs2.png',
      avatar: 'BlogsAvatar3.png',
    },
    {
      title: 'Migrating to Linear 101',
      author: 'Phoenix Baker',
      date: '19 Jan 2022',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      image: 'blogs1.png',
      avatar: 'BlogsAvatar2.png',
    },
    {
      title: 'UX review presentations',
      author: 'Olivia Rhye',
      date: '20 Jan 2022',
      description: 'How do you create compelling presentations that wow colleagues and impress your managers?',
      image: 'blogs3.png',
      avatar: 'BlogsAvatar.png',
    },

  ];
  return (
    <>
      <div className='HomeBlogs-parent'>
        <div className="">
          <div className='HomeBlogs-title'>
            <div>
              <p>FROM OUR BLOG</p>
              <h2>Recent Posts</h2>
            </div>
            <div className='Home-blogs-viewmorebutton'>
              <button className='WhoweraeAbout-sub-viewmore-button'>
                <Link to="">View More</Link>
                <ArrowUpRight />
              </button>
            </div>
          </div>
          <Blogscontentcards />
        </div>
      </div>
    </>
  );
};

export default HomeBlogs;
