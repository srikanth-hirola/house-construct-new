/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import BlogPage from './BlogPage';
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
        <div className="container-lg container-xl container-xxl">
          <div className='HomeBlogs-title'>
            <p>FROM OUR BLOG</p>
            <h2>Resources and Insights</h2>
          </div>
         <BlogPage/>
        </div>

      </div>
    </>
  );
};

export default HomeBlogs;
