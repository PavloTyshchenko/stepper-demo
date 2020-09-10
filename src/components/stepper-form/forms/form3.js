import React from 'react';

const Form3 = (props) => {
  const { currentStep, setStep } = props;

  return (
    <form>
      <input type="text" placeholder="Name"/>
    </form>
  )
};

export default Form3;
