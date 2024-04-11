import React, { useState } from 'react';
import { Steps, Form, Button, Radio } from 'antd';

const { Step } = Steps;

const productSteps = [
  { title: 'Step 1', content: 'Product Step 1 content' },
  { title: 'Step 2', content: 'Product Step 2 content' }
];

const serviceSteps = [
  { title: 'Step 1', content: 'Service Step 1 content' },
  { title: 'Step 2', content: 'Service Step 2 content' },
  { title: 'Step 3', content: 'Service Step 3 content' }
];

const VerticalStepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [selectedOption, setSelectedOption] = useState('products');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setCurrentStep(0); // Reset current step when switching between options
    form.resetFields(); // Reset form fields when switching between options
  };

  const steps = selectedOption === 'products' ? productSteps : serviceSteps;

  const next = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1);
    });
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '25%' }}>
        <Radio.Group value={selectedOption} onChange={handleOptionChange}>
          <Radio.Button value="products">Products</Radio.Button>
          <Radio.Button value="services">Services</Radio.Button>
        </Radio.Group>
        <Steps direction="vertical" current={currentStep} style={{ marginTop: '20px' }}>
          {steps.map((item, index) => (
            <Step key={index} title={item.title} />
          ))}
        </Steps>
      </div>
      <div style={{ width: '75%', padding: '0 20px' }}>
        <Form
          form={form}
          initialValues={{ remember: true }}
          onFinish={() => console.log('Finished')}
        >
          <div style={{ display: 'block', minHeight: '200px' }}>
            {steps[currentStep].content}
          </div>
          <div style={{ marginTop: '20px' }}>
            {currentStep > 0 && (
              <Button style={{ marginRight: '8px' }} onClick={prev}>
                Previous
              </Button>
            )}
            {currentStep < steps.length - 1 && (
              <Button type="primary" onClick={next}>
                Next
              </Button>
            )}
            {currentStep === steps.length - 1 && (
              <Button type="primary" htmlType="submit">
                Finish
              </Button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default VerticalStepperForm;
