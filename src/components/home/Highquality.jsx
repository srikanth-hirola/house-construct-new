import React from "react";

const Highquality = () => {
  return (
    <>
      <div className="hightquality-parent">
        <div className="highquality-sub">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="images-parent">
                  <div className="img1">
                    <img src="/images/about2.webp" />
                  </div>
                  <div className="image2-parent">
                    <div className="img2">
                      <img src="/images/about3.webp" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="highquality-sec2-text1">
                  <p>WHAT WE DO</p>
                </div>
                <div className="highquality-sec2-text2">
                  <h5>Transforming Dreams into High Quality Living Spaces</h5>
                </div>
                {/* <div className="button-parents">
                  <div className="row">
                    <div className="col-md-2 button1">
                      <button>Skills</button>
                    </div>
                    <div className="col-md-3 button2">
                      <button>Experience</button>
                    </div>
                    <div className="col-md-3 button3">
                      <button>Destination</button>
                    </div>
                  </div>
                </div> */}
                <ul class="nav nav-tabs" id="myTab" role="tablist nav-tabs-par">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Skills
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Experience
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Destination
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="tab-parents-main">
                      <div className="text-para">
                        <p>
                          Uniquely repurpose client-centered imperatives without
                          distinctive products leverage existing fully
                          researched.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-6 list-items">
                          <ul>
                            <li>Great Quality Service</li>
                            <li>Great Quality Service</li>
                          </ul>
                        </div>

                        <div className="col-6 list-items2">
                          <ul>
                            <li>Great Quality Service</li>
                            <li>Great Quality Service</li>
                          </ul>{" "}
                        </div>
                      </div>
                      <div className="view-more-button">
                        <button>View More</button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="tab-parents-main">
                      <div className="text-para">
                        <p>
                          Uniquely repurpose client-centered imperatives without
                          distinctive products leverage existing fully
                          researched.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-6 list-items">
                          <ul>
                            <li>Great Quality Service</li>
                            <li>Great Quality Service</li>
                          </ul>
                        </div>

                        <div className="col-6 list-items2">
                          <ul>
                            <li>Great Quality Service</li>
                            <li>Great Quality Service</li>
                          </ul>{" "}
                        </div>
                      </div>
                      <div className="view-more-button">
                        <button>View More</button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="tab-parents-main">
                      <div className="text-para">
                        <p>
                          Uniquely repurpose client-centered imperatives without
                          distinctive products leverage existing fully
                          researched.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-6 list-items">
                          <ul>
                            <li>Great Quality Service</li>
                            <li>Great Quality Service</li>
                          </ul>
                        </div>

                        <div className="col-6 list-items2">
                          <ul>
                            <li>Great Quality Service</li>
                            <li>Great Quality Service</li>
                          </ul>{" "}
                        </div>
                      </div>
                      <div className="view-more-button">
                        <button>View More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highquality;
