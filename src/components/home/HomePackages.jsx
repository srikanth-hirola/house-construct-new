/* eslint-disable no-unused-vars */



import React, { useState, useEffect } from "react";
import { Steps } from "antd";
import packagesData from "../../assets/data/packages.json";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
const { Step } = Steps;

const HomePackages = () => {
  const citiesData = packagesData.cities;
  const [selectedCity, setSelectedCity] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [openAccordion, setOpenAccordion] = useState();
  const [selectedPackageTitle, setSelectedPackageTitle] = useState("");
  // Set initial selected city when component mounts
  useEffect(() => {
    if (citiesData.length > 0) {
      setSelectedCity(citiesData[0].name); // Select the first city
    }
  }, [citiesData]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setCurrentStep(0); // Reset current step when city changes
  };
  console.log("selectedCity", selectedCity)
  const handlePackageChange = (packageIndex, packageName) => {
    setCurrentStep(packageIndex);
    setSelectedPackageTitle(packageName);
  };
  useEffect(() => {
    if (citiesData.length > 0) {
      setSelectedCity(citiesData[0].name); // Select the first city
    }
  }, [citiesData]);



  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <>
      <div className="home-packages">
        <div className="home-packages-sub">
          <div className="container-lg container-xl container-xxl p-0">

            <div className="home-packages">
              <div className="home-packages-sub">
                <div className="container-lg container-xl container-xxl">
                  <div>
                    <div className="package-text">
                      <h3> Packages</h3>
                      <span> Currently showing for </span> <select value={selectedCity} onChange={handleCityChange}>
                        <option value="">Select City</option>
                        {citiesData.map((city) => (
                          <option key={city.name} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="home-packeges-mobile">
                      {selectedCity && (
                        <div>
                          <div className="main-packages">
                            {citiesData
                              .find((city) => city.name === selectedCity)
                              .packages.map((pkg, index) => (
                                <div key={index} className="main-package">
                                  <h3>{pkg.name}</h3>
                                  <div className="accordion">
                                    {pkg.features.map((feature, idx) => (
                                      <div key={idx} className="accordion-item">
                                        <button
                                          className="accordion-header"
                                          onClick={() => toggleAccordion(idx)}
                                        >
                                          <h4>{feature.title}{" "}</h4>
                                          <span className="acc-count"  >{openAccordion === idx ? "-" : "+"}</span>
                                        </button>
                                        <div
                                          className={`accordion-content ${openAccordion === idx ? "open" : ""
                                            }`}
                                        >
                                          <ul>
                                            {feature.items.map((item, i) => (
                                              <li key={i}>{item}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mobile-packeges" >

                      {selectedCity && (
                        <div>
                          <div className="main-packages">
                            <Steps current={currentStep} direction="horizontal">
                              {citiesData
                                .find((city) => city.name === selectedCity)
                                .packages.map((pkg, index) => (
                                  <Step
                                    key={index}
                                    title={
                                      <div style={{ textAlign: "center" }}>
                                        {/* {index === currentStep ? (
              <CheckCircleOutlined style={{ color: "green", fontSize: 24 }} />
            ) : (
              <CloseCircleOutlined style={{ color: "red", fontSize: 24 }} />
            )} */}
                                        <div>{pkg.name.split(" ")[0]}</div>
                                        <div>{pkg.name.split}</div>
                                      </div>
                                    }
                                    onClick={() => handlePackageChange(index)}
                                  />
                                ))}
                            </Steps>


                            <div className="step-content">
                              <div className="main-package">
                                <h3>{citiesData.find((city) => city.name === selectedCity).packages[currentStep].name}</h3>
                                <div className="accordian">
                                  {citiesData
                                    .find((city) => city.name === selectedCity)
                                    .packages[currentStep].features.map((feature, idx) => (
                                      <div key={idx} className="accordion-item">
                                        <button
                                          className="accordion-header"
                                          onClick={() => toggleAccordion(idx)}
                                        >
                                          <h4>{feature.title}{" "}</h4>
                                          <span className="acc-count"  >{openAccordion === idx ? "-" : "+"}</span>
                                        </button>
                                        <div
                                          className={`accordion-content ${openAccordion === idx ? "open" : ""
                                            }`}
                                        >
                                          <ul>
                                            {feature.items.map((item, i) => (
                                              <li key={i}>{item}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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

export default HomePackages;
