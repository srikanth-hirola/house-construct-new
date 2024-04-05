
import React, { useState } from 'react';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import blogs from '../../assets/data/blogs.json';
const Blogscontentcards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const blogData = blogs; // Move blogData inside the component

  const calculatePageSize = () => {
    // Calculate page size based on window width
    if (window.innerWidth < 575 || (window.innerWidth > 575 && window.innerWidth < 767) || (window.innerWidth > 767 && window.innerWidth < 992)) {
      setPageSize(3);
    } else {
      setPageSize(6);
    }
  };

  React.useEffect(() => {
    calculatePageSize();
    window.addEventListener('resize', calculatePageSize);
    return () => window.removeEventListener('resize', calculatePageSize);
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentBlogData = blogData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='HomeBlogs-parent'>
      <div className="container-lg container-xl container-xxl">
        <div className="row">
        {currentBlogData.map((blog, index) => (
            <div className="col-sm-6 col-md-4" key={index}>
              <div className="HomeBlogs-sub">
                {/* Generate the slug from the title */}
                <Link key={index} to={`/blogs/${blog.slug}`}>
                  <div className='HomeBlogs-sub-image'>
                    <img src={blog.image} alt="" />
                  </div>
                  <p>{blog.subtitle}</p>
                  <div className='HomeBlogs-presentations'>
                    <h1>{blog.title}</h1>
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
                      <h5>{blog.author}</h5>
                      <p>{blog.date}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
          {/* Pagination component */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              total={blogData.length}
              pageSize={pageSize}
              onChange={handlePageChange}
              prevText="Prev"
              nextText="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogscontentcards;
