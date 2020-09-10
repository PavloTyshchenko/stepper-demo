import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createTextMask } from 'redux-form-input-masks';

import SelectField from '../../fields/selectField';
import PhoneField from '../../fields/phoneField';

import validate from './validate';

import './form1.scss';

let Form1 = (props) => {
  let history = useHistory();
  const { currentStep, setCurrentStep, submitting, handleSubmit } = props;
  const phoneMask = createTextMask({
    pattern: '9-9999-9999',
    guide: false
  });

  const onSubmit = async (values) => {
    try {
      setCurrentStep(currentStep + 1);
      history.push(`/RegistrationForm/${currentStep + 1}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-wrapper-header">
        Title of the Form
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="country"
          component={SelectField}
          label="Country"
        >
          <option key="1" value="Ukraine">
            Ukraine
          </option>
          <option key="2" value="India">
            India
          </option>
          <option key="3" value="Germany">
            Germany
          </option>
        </Field>
        <Field
          name="number"
          component={PhoneField}
          label="Number"
          placeholder="0-0000-0000"
          {...phoneMask}
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={submitting}
        >
          Continue
        </button>
      </form>
    </div>
  )
};

Form1.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired
};

Form1 = reduxForm({
  form: 'stepperForm',
  validate
})(Form1);

const mapStateToProps = (state, props) => {
  return {
    initialValues: {
      country: 'Ukraine'
    }
  }
};

export default connect(mapStateToProps, null)(Form1);
