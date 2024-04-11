import React, { useState } from 'react';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';

const Blogscontentcards = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageSize, setPageSize] = useState(6);

  // const calculatePageSize = () => {
  //   if (window.innerWidth < 575) {
  //     setPageSize(1);
  //   }
  //   else if (window.innerWidth > 575 && window.innerWidth < 767) {
  //     setPageSize(2);
  //   }
  //   else if (window.innerWidth > 767 && window.innerWidth < 992) {
  //     setPageSize(3);
  //   }
  //   else {
  //     setPageSize(6);
  //   }
  // };


  const blogData = [
    {
      title: 'How to Choose the Right Floor Plan for Your Dream Home',
      subtitle: 'Design',
      author: 'Lana Steiner',
      date: '18 Jan 2022',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating,testing, and managing them.',
      image: 'dude.jpg',
      avatar: 'BlogsAvatar3.png',
      link: '/how-to-choose-the-right-floor-plan-for-your-dream-home'
    },
    {
      title: 'The Role of Architectural Design in Creating Sustainable Homes',
      subtitle: 'Product',
      author: 'Phoenix Baker',
      date: '19 Jan 2022',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      image: 'dube2.jpg',
      avatar: 'BlogsAvatar2.png',
      link: '/the-role-of-architectural-design-in-creating-sustainable-homes'
    },
    {
      title: 'The Top Trends in Home Construction and Design for 2023',
      subtitle: 'Software Engineering',
      author: 'Olivia Rhye',
      date: '20 Jan 2022',
      description: 'How do you create compelling presentations that wow colleagues and impress your managers?',
      image: 'dube3.jpg',
      avatar: 'BlogsAvatar.png',
      link: '/the-top-trends-in-home-construction-and-design-for-2023'
    },
  ];
  // React.useEffect(() => {
  //   calculatePageSize();
  //   window.addEventListener('resize', calculatePageSize);
  //   return () => window.removeEventListener('resize', calculatePageSize);
  // }, []);

  // const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = startIndex + pageSize;
  // const currentBlogData = blogData.slice(startIndex, endIndex);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <>
      <div className='HomeBlogs-parent'>
        <div className="row">

          {blogData.map((blog, index) => (
            <div className=" col-sm-6 col-md-4" key={index}>
              <Link to={blog.link} style={{ textDecoration: "none" }}>
                <div className="HomeBlogs-sub">
                  <div className='HomeBlogs-sub-image'>
                    <img src={blog.image} alt="" />
                  </div>
                  <p>
                    {blog.date}
                  </p>
                  <div className='HomeBlogs-presentations'>
                    <h1>{blog.title}</h1>

                  </div>
                  {/* <p className='Blogs-desc'>{blog.description}</p>
      <div className='HomeBlogs-Footer'>
        <div className='HomeBlogs-Footer-image'>
          <img src={blog.avatar} alt="" />
        </div>
        <div className='HomeBlogs-name-date'>
          <h5>{blog.author}</h5>
          <p>{blog.date}</p>
        </div>
      </div> */}
                </div>
              </Link>
            </div>
          ))}

          {/* Pagination component */}
          {/* <div style={{ textAlign: 'center', marginTop: '20px' }}>
  <Pagination
    defaultCurrent={1}
    current={currentPage}
    total={blogData.length}
    pageSize={pageSize}
    onChange={handlePageChange}
    prevText="Prev"
    nextText="Next"
  />
</div> */}
        </div>

      </div>
    </>
  );
};

export default Blogscontentcards;