import React from 'react';
import { Route, Redirect, useParams } from 'react-router-dom';

const StepperRoute = ({component: Component, currentStep, setCurrentStep, formValues, setFormValues, ...rest}) => {
  let doRedirect = false;
  const { id: currentUrlId } = useParams();

  if(currentUrlId > currentStep) {
    doRedirect = true;
  }

  return (
    <Route {...rest} render={props => (
      doRedirect
        ? <Redirect to={`/RegistrationForm/${currentStep}`} />
        : <Component
            {...props}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            formValues={formValues}
            setFormValues={setFormValues}
          />
      )}
    />
  );
};

export default StepperRoute;
