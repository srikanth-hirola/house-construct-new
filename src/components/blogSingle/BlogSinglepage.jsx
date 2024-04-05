/* eslint-disable no-unused-vars */


import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../assets/data/blogs.json';

const BlogSinglepage = () => {
  const { slug } = useParams();
  const blog = blogs.find(blog => blog.slug === slug);

  if (!blog) {
    // Handle case when blog is not found
    return <div>Blog not found</div>;
  }
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-single-page-parent">
      <div className="blog-single-page-sub">
        <div className="container">
          <div className="blog-single-page-heading1">
            <h5>{blog.title}</h5>
          </div>
          <div className="blog-single-page-text1">
            <p>
              By <span>{blog.author}</span>
            </p>
            <p>{blog.date}</p>
          </div>
          <div className="blog-single-page-img1">
            <img src={blog.image} alt="" />
          </div>
          <div className="blog-single-page-text2">
            {/* Display blog content */}
            {blog.content.map((item, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSinglepage;
