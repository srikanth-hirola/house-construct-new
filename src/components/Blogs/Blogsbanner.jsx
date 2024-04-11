import React from 'react'

const Blogsbanner = () => {
  return (
    <>
      <div className='Blogsbanner-parent'>
        <div className="service-banner-subparent" style={{ backgroundImage: "url('/servicepage/servicebanner.jpg')" }}>
          <div className='service-banner-text'>
            <div className='text-line'>
              <p>Home</p>
              <h6>.</h6>
              <p>Blogs</p>
            </div>
            <h1>Blogs</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogsbanner