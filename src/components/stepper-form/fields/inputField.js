import React from 'react';

import './styles.scss';

const InputField = ({ input, label, placeholder, meta: { touched, error } }) => (
  <div className="field">
    <div className="input-field">
      <label>{label}</label>
      <input
        {...input}
        type="text"
        placeholder={placeholder ? placeholder : label}
        className={"input" + (error ? " error" : "")}
      />
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  </div>
);

export default InputField;
