import React from 'react';

import StepperForm from '../components/stepper-form/stepperForm';
import Form1 from '../components/stepper-form/forms/form1/';
import Form2 from '../components/stepper-form/forms/form2/';
import Form3 from '../components/stepper-form/forms/form3';

const FormPage = () => {
  const steps = [
    {
      id: 1,
      stepLabel: 'Title',
      form: Form1
    },
    {
      id: 2,
      stepLabel: 'Title',
      form: Form2
    },
    {
      id: 3,
      stepLabel: 'Title',
      form: Form3
    }
  ];

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="page">
      <StepperForm steps={steps} handleSubmit />
    </div>
  )
};

export default FormPage;
