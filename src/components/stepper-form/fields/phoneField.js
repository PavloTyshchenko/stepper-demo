import React from 'react';

import './styles.scss';

const PhoneField = ({ input, label, placeholder, meta: { touched, error } }) => {
  return (
    <div className="field">
      <div className="phone-field">
        <label>{label}</label>
        <input
          {...input}
          type="tel"
          placeholder={placeholder ? placeholder : label}
          className={"input" + (error ? " error" : "")}
        />
        {touched && error && <div className="field-error">{error}</div>}
      </div>
    </div>
  )
};

export default PhoneField;
