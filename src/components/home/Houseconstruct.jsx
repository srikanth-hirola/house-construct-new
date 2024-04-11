/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// import React, { useEffect, useState } from "react";
// import { useSpring, animated } from "react-spring";
// import MarqueeText from "./MarqueeText";

// const Houseconstruct = () => {
//    // State to track scroll position
//   const [scrollY, setScrollY] = useState(0);

// // Update scroll position on mount and scroll
// useEffect(() => {
//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   // Add scroll event listener
//   window.addEventListener("scroll", handleScroll);

//   // Remove event listener on component unmount
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []); // Empty dependency array ensures the effect runs only on mount and unmount

// // Function to determine if an element is in the viewport
// const isInViewport = (element) => {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// // Define animation using react-spring
// const fadeAnimation = useSpring({
//   from: { opacity: 0 },
//   to: { opacity: 1 },
//   config: { duration: 800 }, // Animation duration
//   delay: 200, // Optional delay
//   immediate: true, // Apply immediately, do not wait for next render cycle
// });
 
//   return (
//     <>
//       <div className="housecontruct-page">
//         <div className="housecontruct-page-sub">
         
//           <div className="container">
//           <div className="housecontruct-page-heading">
//             <h2>Why Choose House Construct...?</h2>
//             <p><strong>27+ Years of Crafting Exceptional Living Spaces:</strong> At House Construct, we’ve honed our expertise over more than two decades to create the kind of living spaces that dreams are made of.</p>
//           </div>

//             <div className="row">
          
//            <div className="col-md-4">
//            <animated.div 
//              style={isInViewport ? fadeAnimation : {}}
//                   className={isInViewport ? "fade-in" : ""}
//            >
//             <div className="house-const-card">
//               <div className="house-const-card-img">
//                 <img src="/images/card-1.png" alt="Why Choose House Construct" />
//               </div>
//               <div className="house-const-card-text">
//                 <h3>No Subcontracting</h3>
//                 <p>We believe in hands-on quality. That's why we don't subcontract our work. Every nail, every beam, every detail is overseen by our experienced team.</p>
//               </div>
//             </div>
//             </animated.div>
//            </div>
//            <div className="col-md-4">
//             <animated.div 
//               style={isInViewport ? fadeAnimation : {}}
//                   className={isInViewport ? "fade-in" : ""}
//             >
//             <div className="house-const-card">
//               <div className="house-const-card-img">
//                 <img src="/images/card-2.png" alt="Why Choose House Construct" />
//               </div>
//               <div className="house-const-card-text">
//                 <h3>Micro Payment System</h3>
//                 <p>Paying for your dream home is made easy with our micro payment system, ensuring you have full control of your finances throughout the project.</p>
//               </div>
//             </div>
//             </animated.div>
//            </div>
//            <div className="col-md-4">
//            <animated.div 
//              style={isInViewport ? fadeAnimation : {}}
//                   className={isInViewport ? "fade-in" : ""}
//            >
//             <div className="house-const-card">
//               <div className="house-const-card-img">
//                 <img src="/images/card-3.png" alt="Why Choose House Construct" />
//               </div>
//               <div className="house-const-card-text">
//                 <h3>No Delays Policy</h3>
//                 <p>With our "No Delay" policy, your project stays on track. Your time is precious, and we respect it by keeping things on schedule.</p>
//               </div>
//             </div>
//             </animated.div>
//            </div>
//            <div className="col-md-4">
//            <animated.div 
//              style={isInViewport ? fadeAnimation : {}}
//                   className={isInViewport ? "fade-in" : ""}
//            >
//             <div className="house-const-card">
//               <div className="house-const-card-img">
//                 <img src="/images/card-4.png" alt="Why Choose House Construct" />
//               </div>
//               <div className="house-const-card-text">
//                 <h3>410+ Unique Quality Checks</h3>
//                 <p>We believe in hands-on quality. That's why we don't subcontract our work. Every nail, every beam, every detail is overseen by our experienced team.</p>
//               </div>
//             </div>
//             </animated.div>
//            </div>
//            <div className="col-md-4">
//            <animated.div 
//              style={isInViewport ? fadeAnimation : {}}
//                   className={isInViewport ? "fade-in" : ""}
//            >
//             <div className="house-const-card">
//               <div className="house-const-card-img">
//                 <img src="/images/card-5.png" alt="Why Choose House Construct" />
//               </div>
//               <div className="house-const-card-text">
//                 <h3>10-Year Warranty</h3>
//                 <p>We stand by our work. That's why we offer a 10-year warranty with lifetime service assistance, ensuring your peace of mind for the long haul.</p>
//               </div>
//             </div>
//             </animated.div>
//            </div>
//            <div className="col-md-4">
//            <animated.div 
//              style={isInViewport ? fadeAnimation : {}}
//                   className={isInViewport ? "fade-in" : ""}
//            >
//             <div className="house-const-card">
//               <div className="house-const-card-img">
//                 <img src="/images/card-6.png" alt="Why Choose House Construct" />
//               </div>
//               <div className="house-const-card-text">
//                 <h3>Absolute Transparency</h3>
//                 <p>We take pride in our unwavering commitment to transparency. We believe in clear communication, and open collaboration with our clients.</p>
//               </div>
//             </div>
//             </animated.div>
//            </div>
          
//             </div>
//           </div>
//         </div>
//         <MarqueeText/>
//       </div>
//     </>
//   );
// };

// export default Houseconstruct;


import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import MarqueeText from "./MarqueeText";

const Houseconstruct = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    handleVisibility();
    window.addEventListener("scroll", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  const fadeSlideAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(-50%)", // Slide in from left
    from: { opacity: 0, transform: "translateY(-50%)" }, // Start off-screen to the left
    config: { duration: 800 },
  });
  return (
    <>
      <div className="housecontruct-page">
        <div className="housecontruct-page-sub">
          <div className="container">
            <div className="housecontruct-page-heading">
              <h2>Why Choose House Construct...?</h2>
              <p>
                <strong>27+ Years of Crafting Exceptional Living Spaces:</strong>{" "}
                At House Construct, we’ve honed our expertise over more than two
                decades to create the kind of living spaces that dreams are made
                of.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        src="/images/card-1.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>No Subcontracting</h3>
                      <p>
                        We believe in hands-on quality. That's why we don't
                        subcontract our work. Every nail, every beam, every
                        detail is overseen by our experienced team.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              <div className="col-md-4">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        src="/images/card-1.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>No Subcontracting</h3>
                      <p>
                        We believe in hands-on quality. That's why we don't
                        subcontract our work. Every nail, every beam, every
                        detail is overseen by our experienced team.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              <div className="col-md-4">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        src="/images/card-1.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>No Subcontracting</h3>
                      <p>
                        We believe in hands-on quality. That's why we don't
                        subcontract our work. Every nail, every beam, every
                        detail is overseen by our experienced team.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              <div className="col-md-4">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        src="/images/card-1.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>No Subcontracting</h3>
                      <p>
                        We believe in hands-on quality. That's why we don't
                        subcontract our work. Every nail, every beam, every
                        detail is overseen by our experienced team.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              <div className="col-md-4">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        src="/images/card-1.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>No Subcontracting</h3>
                      <p>
                        We believe in hands-on quality. That's why we don't
                        subcontract our work. Every nail, every beam, every
                        detail is overseen by our experienced team.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              <div className="col-md-4">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        src="/images/card-1.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>No Subcontracting</h3>
                      <p>
                        We believe in hands-on quality. That's why we don't
                        subcontract our work. Every nail, every beam, every
                        detail is overseen by our experienced team.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              {/* Repeat similar structure for other columns */}
            </div>
          </div>
        </div>
        <MarqueeText />
      </div>
    </>
  );
};

export default Houseconstruct;
