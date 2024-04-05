/* eslint-disable no-unused-vars */
import React from 'react'
import blogs from '../../assets/data/blogs.json';
import { Link } from 'react-router-dom';
const BlogPage = () => {
    const currentBlogData = blogs;
  return (
    <>
    <div className="row">
            {currentBlogData.map((blog, index) => (
              <div className=" col-sm-6 col-md-4" key={index}>
                <div className="HomeBlogs-sub">
              <Link key={index} to={`/blogs/${blog.slug}`}>
                  <div className='HomeBlogs-sub-image'>
                    <img src={blog.image} alt="" />
                  </div>
                  <p>Software Engineering</p>
                  <div className='HomeBlogs-presentations'>
                    <h5>{blog.title}</h5>
                    <div className='HomeBlogs-card-arrow'>
                      <img src="arrow-up-right.png" alt="" />
                    </div>
                  </div>
                  <p className='Blogs-desc'>{blog.description}</p>
                  <div className='HomeBlogs-Footer'>
                    <div className='HomeBlogs-Footer-image'>
                      <img src={blog.avatar} alt="" />
                    </div>
                    <div className='HomeBlogs-name-date'>
                      <p>{blog.author}</p>
                      <p>{blog.date}</p>
                    </div>
                  </div>
                </Link>
                </div>
              </div>
            ))}
          </div>
    </>
  )
}

export default BlogPage