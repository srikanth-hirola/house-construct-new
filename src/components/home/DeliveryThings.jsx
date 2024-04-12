/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const CounterAnimation = ({ isVisible }) => {
  const [counter, setCounter] = useState(0);

  // Define the spring animation
  const animatedProps = useSpring({
    counter,
    from: { counter: 0 },
    to: async (next) => {
      // Animate to 350 if isVisible is true, otherwise animate to 0
      await next({ counter: isVisible ? 350 : 0 });
    },
    config: { duration: 1200 },
  });

  // Start the counter increment when isVisible becomes true
  useEffect(() => {
    let animationInterval;
    if (isVisible) {
      // Start the animation interval
      animationInterval = setInterval(() => {
        setCounter((prevCounter) => {
          // Reset counter to 0 if it reaches 350
          if (prevCounter >= 350) {
            return 0;
          } else {
            // Increment counter
            return prevCounter + 1;
          }
        });
      }, 10);
    }

    // Clear the animation interval when isVisible becomes false
    return () => clearInterval(animationInterval);
  }, [isVisible]);

  return (
    <animated.div>
      {/* Render the animated counter */}
      <animated.h4>
        {/* Interpolate the counter value for smooth animation */}
        {animatedProps.counter.interpolate((x) => Math.floor(x))}
      </animated.h4>
    </animated.div>
  );
};
const DeliveryThings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);


  const resetCounter = () => {
    // Reset the counter when scrolling occurs
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 10); // Delay to trigger animation again
  };
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
    transform: isVisible ? "translateX(0%)" : "translateX(5%)", // Slide in from right
    from: { opacity: 0, transform: "translateX(5%)" }, // Start off-screen to the right
    config: { duration: 800 },
  });

  return (
    <>
      <div className="delivery-Things-parent">
        <div
          className="delivery-Things-subparent"
          style={{ backgroundImage: `url(/images/del-bg.jpg)` }}
        >
          <div className="section-width">
            <div className="row">
              <div className="col-md-7">
                <div className="datapage">
                  <h2>WHAT WE DO</h2>
                  <h3>Transforming Dreams into High Quality Living Spaces</h3>
                  <div className="datapage-counter">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="datapage-counter-sec">
                          <div className="datapage-count">
                            <div className="datapage-counter-main">
                              <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="512" viewBox="0 0 607.775 607.775" width="512"><g><g id="Page-1_5_"><g id="_x30_06---Draw-Blueprint"><path id="Shape_17_" d="m607.772 60.352c.037-8.254-3.248-16.176-9.117-21.981l-29.253-29.254c-5.778-5.841-13.654-9.124-21.87-9.117h-.101c-8.166.005-15.987 3.29-21.708 9.117l-132.696 132.696h-261.341v-111.424c0-16.784-13.606-30.389-30.389-30.389h-20.259c-44.734.05-80.986 36.302-81.036 81.036v448.241c2.535 44.393 39.511 78.955 83.974 78.493h493.408c16.783 0 30.388-13.605 30.388-30.388v-405.18c0-16.783-13.605-30.389-30.388-30.389h-38.492l59.764-59.764c5.815-5.724 9.098-13.537 9.116-21.697zm-245.336 192.886c-2.144.292-4.299-.462-5.794-2.026-1.508-1.498-2.253-3.6-2.026-5.713l3.839-34.44c.161-.72.364-1.431.608-2.127l39.9 39.9c-.658.142-1.256.466-1.945.547zm53.068-16.542-44.327-44.337 110.412-110.411 44.306 44.296zm80.368-169.082 15.022-15.012 44.286 44.296-15.012 15.022zm-475.611 13.422c.034-33.552 27.225-60.744 60.777-60.777h20.259c5.594 0 10.13 4.535 10.13 10.129v405.18c0 5.594-4.535 10.129-10.13 10.129h-20.259c-23.271-.007-45.417 10.01-60.777 27.491zm557.123 81.036c5.594 0 10.13 4.535 10.13 10.13v405.18c0 5.594-4.535 10.13-10.13 10.13h-493.408c-33.44.562-61.454-25.181-63.715-58.549v-2.229c.034-33.552 27.225-60.743 60.777-60.777h20.259c16.783 0 30.388-13.605 30.388-30.388v-273.497h241.082l-23.004 23.004c-6.422 6.328-10.462 14.679-11.436 23.642l-3.839 34.511c-.316 3.366.004 6.76.942 10.008h-173.356c-5.594 0-10.13 4.535-10.13 10.13 0 5.594 4.535 10.129 10.13 10.129h30.389v273.497c0 5.594 4.535 10.13 10.13 10.13s10.13-4.535 10.13-10.13v-141.813h111.424v81.036h-70.907c-5.594 0-10.129 4.535-10.129 10.129s4.535 10.13 10.129 10.13h202.59c11.189 0 20.259-9.07 20.259-20.259v-151.942c0-5.594-4.535-10.13-10.129-10.13s-10.13 4.535-10.13 10.13v50.647h-243.108v-111.424h148.985c.988.002 1.976-.052 2.958-.162l34.612-3.94c8.785-.997 16.985-4.901 23.298-11.092l96.109-96.23h58.7zm-121.554 243.108v81.036h-111.425v-81.036zm128.543-337.495-14.87 14.88-44.286-44.286 14.88-14.88c1.947-1.998 4.615-3.13 7.405-3.14 2.84.007 5.558 1.153 7.546 3.181l29.295 29.234c2.037 2.006 3.18 4.748 3.171 7.607-.009 2.79-1.141 5.459-3.141 7.404z"></path></g></g></g></svg>
                            </div>
                            <div className="datapage-counter-count">
                              {/* <h4>
                        350 <sup>+</sup>{" "}
                      </h4> */}
                              <CounterAnimation
                                isVisible={isVisible}
                              // onReset={resetCounter}
                              />
                              <strong>Projects</strong>
                            </div>
                          </div>
                          <div className="datapage-counter-desc">
                            <p>
                              We have completed over 350+ projects, reflecting our
                              commitment to excellence.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="datapage-counter-sec">
                          <div className="datapage-count">
                            <div className="datapage-counter-main">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="512" height="512"><g id="Layer_25" data-name="Layer 25"><path d="M11,26H27a1,1,0,0,0,1-1V19a8.94,8.94,0,0,0-.668-3.391A5,5,0,0,1,36,19v3H31a1,1,0,0,0,0,2h6a1,1,0,0,0,1-1V19a7,7,0,0,0-3.779-6.208,5,5,0,1,0-6.438,0,7.054,7.054,0,0,0-1.457,1A8.988,8.988,0,0,0,19,10a3.994,3.994,0,1,1,3.668-2.4,1,1,0,0,0,1.832.8,6,6,0,1,0-9.126,2.369A9.008,9.008,0,0,0,10,19v6A1,1,0,0,0,11,26ZM28,9a3,3,0,1,1,3,3A3,3,0,0,1,28,9ZM12,19a7,7,0,0,1,14,0v5H12Z"></path><path d="M29.145,41.271l3.562-3.564A1,1,0,0,0,32,36H26.721l-1.773-5.316a1,1,0,0,0-1.9,0L21.279,36H16a1,1,0,0,0-.707,1.707l3.562,3.564-1.8,5.413a1,1,0,0,0,1.363,1.226L24,45.365l5.585,2.545a1,1,0,0,0,1.363-1.226Zm-4.73,2.085a1.012,1.012,0,0,0-.83,0l-3.91,1.783,1.273-3.823a1,1,0,0,0-.241-1.023L18.414,38H22a1,1,0,0,0,.948-.684L24,34.162l1.052,3.154A1,1,0,0,0,26,38h3.586l-2.293,2.293a1,1,0,0,0-.241,1.023l1.273,3.823Z"></path><path d="M13.948,40.684a1,1,0,1,0-1.9.632l1.273,3.823-3.91-1.783a1.009,1.009,0,0,0-.83,0l-3.91,1.783,1.273-3.823a1,1,0,0,0-.241-1.023L3.414,38H7a1,1,0,0,0,.948-.684L9,34.162l1.052,3.154A1,1,0,0,0,11,38h1a1,1,0,0,0,0-2h-.279L9.948,30.684a1,1,0,0,0-1.9,0L6.279,36H1a1,1,0,0,0-.707,1.707l3.562,3.564-1.8,5.413A1,1,0,0,0,3.415,47.91L9,45.365l5.585,2.545a1,1,0,0,0,1.363-1.226Z"></path><path d="M47.924,36.617A1,1,0,0,0,47,36H41.721l-1.773-5.316a1,1,0,0,0-1.9,0L36.279,36H36a1,1,0,0,0,0,2h1a1,1,0,0,0,.948-.684L39,34.162l1.052,3.154A1,1,0,0,0,41,38h3.586l-2.293,2.293a1,1,0,0,0-.241,1.023l1.273,3.823-3.91-1.783a1.009,1.009,0,0,0-.83,0l-3.91,1.783,1.273-3.823a1,1,0,1,0-1.9-.632l-2,6a1,1,0,0,0,1.363,1.226L39,45.365l5.585,2.545a1,1,0,0,0,1.363-1.226l-1.8-5.413,3.562-3.564A1,1,0,0,0,47.924,36.617Z"></path></g></svg>
                            </div>
                            <div className="datapage-counter-count">
                              <h4>
                                400 <sup>+</sup>{" "}
                              </h4>
                              <strong>Clients</strong>
                            </div>
                          </div>
                          <div className="datapage-counter-desc">
                            <p>
                              We have a track record of success is defined by the trust of over 400 clients and still growing.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="datapage-counter-sec">
                          <div className="datapage-count">
                            <div className="datapage-counter-main">
                              <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 64 64" width="512"><g id="Construction_Worker" data-name="Construction Worker"><path d="m25.55762 10.08154c.17773-.14306.36035-.28027.55078-.41064a.9997.9997 0 0 1 1.13281 1.64746q-.22119.15307-.42969.3208a.99985.99985 0 0 1 -1.2539-1.55762z"></path><path d="m22.53125 14.729a8.24076 8.24076 0 0 1 1.06641-2.47607 1.0002 1.0002 0 0 1 1.68554 1.07715 6.28535 6.28535 0 0 0 -.81054 1.87646.99964.99964 0 0 1 -1.94141-.47754z"></path><path d="m21.5 55.96777h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"></path><path d="m45.5 55.96777h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"></path><path d="m54.92773 44.98877c-2.59845-3.293-13.30548-6.744-15.55633-7.44171a39.12871 39.12871 0 0 0 -.49408-4.2049 12.12629 12.12629 0 0 0 3.38147-6.09851 5.97565 5.97565 0 0 0 1.623-1.8208 4.92682 4.92682 0 0 0 .56543-3.85589 2.6279 2.6279 0 0 0 1.709-2.44538 2.73428 2.73428 0 0 0 -1.5332-2.46826 11.77054 11.77054 0 0 0 -8.08359-10.97681 2.14912 2.14912 0 0 0 -2.09412-1.70874h-4.71484a2.14329 2.14329 0 0 0 -2.0647 1.61359 11.90591 11.90591 0 0 0 -8.364 11.11786 2.74657 2.74657 0 0 0 -1.458 2.42236 2.62435 2.62435 0 0 0 1.67047 2.43054 5.48652 5.48652 0 0 0 .12933 2.84681 5.59232 5.59232 0 0 0 2.2793 2.96 13.141 13.141 0 0 0 3.29393 6.07307 38.589 38.589 0 0 0 -.48163 4.12127c-2.32959.69593-12.78986 3.95789-15.37775 7.14844-2.33984 2.88423-3.17676 13.09956-3.26465 14.25483a.99994.99994 0 0 0 1.99414.15137c.22558-2.96631 1.17286-11.11133 2.82325-13.14648.85949-1.05951 3.07531-2.24091 5.58984-3.32416v8.3305h-1a.99974.99974 0 0 0 -1 1v7.06446a1 1 0 0 0 2 0v-6.06446h31v6.06446a1 1 0 0 0 2 0v-7.06446a.99974.99974 0 0 0 -1-1h-1v-8.28064c2.6319 1.1557 4.97424 2.42139 5.85742 3.5409 1.58106 2.00293 2.37988 9.96533 2.55469 12.86426a.99988.99988 0 0 0 1.99609-.12012c-.06738-1.13037-.72851-11.1294-2.98047-13.9834zm-22.93261.061h.01367c2.59863-.00048 5.8584-3.82275 7.14551-5.4746.40045.12677.85931.27728 1.3457.44036v10.95224h-17v-10.93225c.53632-.17425 1.03619-.332 1.47168-.46472 1.25977 1.65332 4.44332 5.46582 7.02344 5.479zm5.44888-6.53836c-1.65008 2.07624-4.12347 4.53839-5.43329 4.53839h-.00586c-1.30011-.00659-3.73407-2.48736-5.34027-4.56152a32.98448 32.98448 0 0 1 .36231-3.52869c3.03294 1.90411 7.12307 1.433 10.01849-.25451a35.18208 35.18208 0 0 1 .39862 3.80633zm-17.08755-20.07977c.98339-.04492.96-1.05615.95214-1.38867l-.00683-.40918a9.85 9.85 0 0 1 6.48321-8.97l.83612 6.52124a1.0005 1.0005 0 0 0 1.98438-.25684l-1.01367-7.83737a.14714.14714 0 0 1 .13867-.12305h4.71484a.14712.14712 0 0 1 .13867.12305l-1.01367 7.8374a1.00047 1.00047 0 0 0 1.98438.25684l.83062-6.42371a9.72115 9.72115 0 0 1 6.23774 8.87244q0 .36328-.02832.72021a1.0019 1.0019 0 0 0 1.01855 1.07764c.266-.065.543.37446.543.68994 0 .4668-.50684.6543-.80664.6919a102.10459 102.10459 0 0 1 -11.31152.6455 104.2545 104.2545 0 0 1 -11.3877-.6455c-.2998-.0376-.80664-.2251-.80664-.6919a.6913.6913 0 0 1 .51267-.68994zm3.43457 8.1001a1.0011 1.0011 0 0 0 -.51172-.69092 3.67953 3.67953 0 0 1 -1.73145-2.05176 3.51 3.51 0 0 1 -.06811-1.87109c3.702.39471 7.9082.541 10.55835.541 2.60589 0 6.74932-.14477 10.43231-.53533a2.98644 2.98644 0 0 1 -.32294 2.5036 4.06286 4.06286 0 0 1 -1.33594 1.38818.99852.99852 0 0 0 -.44336.67529 9.50278 9.50278 0 0 1 -4.665 6.68116c-.15918.08251-3.93653 2.01269-7.17676.34375a10.52771 10.52771 0 0 1 -4.7354-6.98388zm-5.29102 24.43603v-9.15077c1.01709-.39759 2.03693-.77155 3-1.10767v10.25844zm27 0h-3v-10.2572c.96039.34516 1.97827.729 3 1.13831z"></path><path d="m31.98828 19.21777c-2.10449-.00048-5.13086-.18945-8.09473-.50537a.99985.99985 0 0 1 .2129-1.98828c2.89746.30859 5.84375.49317 7.88183.49365 2.41211-.00048 5.665-.25586 7.90625-.49414a.99976.99976 0 0 1 .21094 1.98828c-1.11133.11866-4.98242.50538-8.11719.50586z"></path></g></svg>
                            </div>
                            <div className="datapage-counter-count">
                              <h4>
                                50 <sup>+</sup>{" "}
                              </h4>
                              <strong>Professionals</strong>
                            </div>
                          </div>
                          <div className="datapage-counter-desc">
                            <p>
                              We have a team of 50+ experienced professionals with great work done in construction.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="datapage-counter-sec">
                          <div className="datapage-count">
                            <div className="datapage-counter-main">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="_22-guarantee" data-name="22-guarantee"><g id="linear_color" data-name="linear color"><path d="M392,292H316V249c0-8.791,0-23.5-7.644-36.562C298.864,196.222,281.249,188,256,188a12,12,0,0,0-12,12v61.6l-21.483,34.91L196,313.831V304a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12V496a12,12,0,0,0,12,12h80a11.978,11.978,0,0,0,10.246-5.778A43.714,43.714,0,0,0,216,508H376a35.973,35.973,0,0,0,30.151-55.635,37.017,37.017,0,0,0,3.314-2.92,35.948,35.948,0,0,0,4.686-45.08,37.017,37.017,0,0,0,3.314-2.92,35.957,35.957,0,0,0,1.35-49.432A36,36,0,0,0,392,292ZM172,484H116V316h56Zm212.5-3.525A11.959,11.959,0,0,1,376,484H216a20.023,20.023,0,0,1-20-20V342.5l43.562-28.448a12.15,12.15,0,0,0,5.262-7.99l21.4-34.768A12,12,0,0,0,268,265V212.9c21.979,3.739,24,18.617,24,36.1v55a12,12,0,0,0,12,12h88a12,12,0,0,1,0,24H368a12,12,0,0,0,0,24h24a12,12,0,0,1,0,24H368a12,12,0,0,0,0,24h16a12,12,0,0,1,0,24H368a12,12,0,0,0,0,24h8a12,12,0,0,1,8.5,20.475Z"></path><circle cx="144" cy="465" r="12"></circle><path d="M207.674,106.421l-7.3,42.551a12,12,0,0,0,17.412,12.649L256,141.532l38.212,20.089c8.372,4.767,19.357-3.2,17.412-12.649l-7.3-42.551L335.24,76.287a12,12,0,0,0-6.65-20.468l-42.723-6.208L266.761,10.9a12,12,0,0,0-21.522,0L226.133,49.611,183.41,55.819a12,12,0,0,0-6.65,20.468Zm28.153-33.967a12,12,0,0,0,9.035-6.564L256,43.322,267.138,65.89a12,12,0,0,0,9.035,6.564l24.9,3.619L283.056,93.639a12,12,0,0,0-3.451,10.621l4.254,24.8-22.275-11.709a12,12,0,0,0-11.168,0l-22.275,11.709,4.254-24.8a12,12,0,0,0-3.451-10.621L210.923,76.073Z"></path><path d="M503.034,182.392l-34.539-25.9,1.755-43.137a12,12,0,0,0-18.9-10.3L416.048,127.9l-40.483-15a12,12,0,0,0-15.636,14.787l12.719,41.256-26.774,33.867a12,12,0,0,0,9.232,19.441l43.166.651,23.936,35.93c5.114,8.213,18.516,6.441,21.342-2.773l13.959-40.853,41.567-11.661a12,12,0,0,0,3.958-21.154ZM444.952,193.8a12,12,0,0,0-8.114,7.674L428.7,225.291l-13.952-20.944A12,12,0,0,0,404.943,199l-25.163-.38,15.608-19.741a12,12,0,0,0,2.053-10.978l-7.414-24.048,23.6,8.744a12,12,0,0,0,11.076-1.44l20.58-14.483-1.023,25.145a12,12,0,0,0,4.791,10.088l20.134,15.1Z"></path><path d="M156.894,222.252c9.646.168,15.458-12.073,9.232-19.441l-26.774-33.867,12.719-41.256A12,12,0,0,0,136.435,112.9l-40.483,15-35.3-24.845a12,12,0,0,0-18.9,10.3l1.755,43.137-34.539,25.9a12,12,0,0,0,3.958,21.154l41.567,11.661L68.45,256.06c2.826,9.216,16.229,10.984,21.342,2.773l23.936-35.93Zm-59.643-17.9L83.3,225.291l-8.137-23.813a12,12,0,0,0-8.114-7.674l-24.231-6.8,20.134-15.1a12,12,0,0,0,4.791-10.088l-1.023-25.145L87.3,151.158a12,12,0,0,0,11.076,1.44l23.6-8.744L114.559,167.9a12,12,0,0,0,2.053,10.978l15.608,19.741-25.163.38A12,12,0,0,0,97.251,204.347Z"></path></g></g></svg>
                            </div>
                            <div className="datapage-counter-count">
                              <h4>
                                440K <sup>+</sup>{" "}
                              </h4>
                              <strong>Sq.ft of Built-up Area</strong>
                            </div>
                          </div>
                          <div className="datapage-counter-desc">
                            <p>
                              We have constructed over 440k+ square feet of space, demonstrating our ability towards building homes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 datavisible">
                <animated.div style={fadeSlideAnimation} ref={ref}>
                  <div className="d-flex-forline">
                    <h6>HOUSE CONSTRUCT</h6>
                  </div>
                  <div className="delivering-data">
                    <h1>Delivering Exceptional Living Spaces since 1997</h1>
                  </div>
                  <div className="house-warming-page">
                    <p>
                      House Construct is not just a construction company; it’s a
                      legacy of excellence. Since 1997, we’ve been dedicated to
                      creating exceptional living spaces for our clients. With
                      over two decades of experience, 400+ satisfied clients,
                      and a commitment to innovation, quality, and
                      sustainability, we’ve crafted a reputation that stands the
                      test of time.
                    </p>
                    <p>
                      Our journey has been marked by a passion for turning
                      dreams into reality, a commitment to designing and
                      building with precision, and a relentless pursuit of the
                      highest standards in construction. Every project we
                      undertake is a testament to our unwavering dedication to
                      delivering living spaces that are nothing short of
                      exceptional.
                    </p>
                  </div>
                  <div className="see-project-button">
                    <Link to="/portfolio"> View More</Link>
                    <div className="up-arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <path
                          d="M12.79 4.02403V11.528C12.79 11.7307 12.718 11.9067 12.574 12.056C12.43 12.2054 12.254 12.28 12.046 12.28C11.838 12.28 11.6594 12.2054 11.51 12.056C11.3607 11.9067 11.286 11.7307 11.286 11.528V5.83203L4.07004 13.064C3.93137 13.2027 3.75537 13.272 3.54204 13.272C3.32871 13.272 3.15004 13.2 3.00604 13.056C2.86204 12.912 2.79004 12.736 2.79004 12.528C2.79004 12.32 2.86471 12.1414 3.01404 11.992L10.23 4.77603H4.53404C4.33137 4.77603 4.15804 4.70137 4.01404 4.55203C3.87004 4.4027 3.79804 4.2267 3.79804 4.02403C3.79804 3.82137 3.87004 3.64537 4.01404 3.49603C4.15804 3.3467 4.33137 3.27203 4.53404 3.27203H12.038C12.2407 3.27203 12.4167 3.3467 12.566 3.49603C12.7154 3.64537 12.79 3.82137 12.79 4.02403Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </animated.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryThings;
