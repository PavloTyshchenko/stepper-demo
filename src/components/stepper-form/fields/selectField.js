import React from 'react';

import './styles.scss';

const SelectField = ({ input, label, meta: { touched, error }, children }) => (
  <div className="field">
    <div className="select-field">
      <label>{label}</label>
      <select
        className={"input" + (error ? " error" : "")}
        {...input}
      >
        {children}
      </select>
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  </div>
);

export default SelectField;
