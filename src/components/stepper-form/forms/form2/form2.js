import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createTextMask } from 'redux-form-input-masks';

import SelectField from '../../fields/selectField';
import PhoneField from '../../fields/phoneField';
import InputField from '../../fields/inputField';

import validate from './validate';

import './form2.scss';

let Form2 = (props) => {
  let history = useHistory();
  const { currentStep, setCurrentStep, submitting, handleSubmit } = props;

  const onSubmit = async (values) => {
    try {
      setCurrentStep(currentStep + 1);
      history.push(`/RegistrationForm/${currentStep + 1}`);
    } catch (error) {
      console.log(error);
    }
  };

  const goPrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      history.replace(`/RegistrationForm/${currentStep - 1}`);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-wrapper-header">
        Personal Info
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="email"
          component={InputField}
          label="Email"
        />
        <div className="button-group">
          <button
            className="btn btn-secondary"
            disabled={submitting}
            onClick={goPrevious}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )
};

Form2.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired
};

Form2 = reduxForm({
  form: 'stepperForm',
  validate
})(Form2);

export default Form2;
