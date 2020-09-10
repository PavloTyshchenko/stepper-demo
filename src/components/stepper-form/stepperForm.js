import React, { useState, useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import StepperRoute from './stepperRoute';
import LinearStepper from './linearStepper/linearStepper';

import './stepperForm.scss';

const StepperForm = (props) => {
  const { steps = [] } = props;
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  return (
    <Container>
      <div className="form-wrap">
        <div className="form-heading">
          <h1>Registration Form</h1>
          <div className="form-heading-subtitle">
            This is Example Registration Form
          </div>
          <LinearStepper currentStep={currentStep} steps={steps} />
        </div>
        <Switch>
          {steps.map((step) => (
            <StepperRoute
              key={step.id}
              component={step.form}
              path={`/RegistrationForm/${step.id}`}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              formValues={formValues}
              setFormValues={setFormValues}
              exact
            />
          ))}
          <Route path="/RegistrationForm/*">
            <Redirect
              to={{
                pathname: `/RegistrationForm/${currentStep}`
              }}
            />
          </Route>
        </Switch>
      </div>
    </Container>
  );
};

export default StepperForm;
