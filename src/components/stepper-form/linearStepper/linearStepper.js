import React from 'react';
import { useParams } from 'react-router-dom';

import './linearStepper.scss';

const LinearStepper = (props) => {
  const { steps, currentStep } = props;
  const passedPercent = Math.round(100 * currentStep / (steps.length + 1));
  const { id: currentUrlId } = useParams();

  return (
    <div
      className="linear-stepper"
      style={{"background": `linear-gradient(to right, #49B8AD ${passedPercent}%, #E5E5E5 20% ${100 - passedPercent}%`}}
    >
      {steps.map((step) => {
        const isActive = parseInt(currentUrlId) === step.id ? ' active' : '';
        const isInvisible = step.id > currentStep ? ' invisible' : '';
        const classes = 'linear-stepper-step' + isActive + isInvisible;

        return (
          <div
            key={step.id}
            className={classes}
          >
            <div>{step.id}</div>
          </div>
        )
      })}
    </div>
  )
};

export default LinearStepper;
