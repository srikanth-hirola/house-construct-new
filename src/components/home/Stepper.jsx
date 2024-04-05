/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const MyStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleClickStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <>
      <div className="stepper-main">
        <div className="stepper-main-sub">
          <div className="container">
       <div className="steps-main">
       <Steps current={currentStep} direction="horizontal">
        <Step title="Raise a Request" onClick={() => handleClickStep(0)} />
        <Step title="Step 2" onClick={() => handleClickStep(1)} />
        <Step title="Step 3" onClick={() => handleClickStep(2)} />
        <Step title="Step 4" onClick={() => handleClickStep(3)} />
        <Step title="Step 5" onClick={() => handleClickStep(4)} />
        <Step title="Step 6" onClick={() => handleClickStep(5)} />
      </Steps>
       </div>
     <div className="container">
     <div style={{ marginTop: '20px', textAlign:"center" }} >
        {currentStep === 0 && (
          <div>
            <h2>Step 1 Content</h2>
            <p>This is the content for Step 1.</p>
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <h2>Step 2 Content</h2>
            <p>This is the content for Step 2.</p>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2>Step 3 Content</h2>
            <p>This is the content for Step 3.</p>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2>Step 4 Content</h2>
            <p>This is the content for Step 4.</p>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h2>Step 5 Content</h2>
            <p>This is the content for Step 5.</p>
          </div>
        )}
        {currentStep === 5 && (
          <div>
            <h2>Step 6 Content</h2>
            <p>This is the content for Step 6.</p>
          </div>
        )}
      </div>
     </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStepper;
