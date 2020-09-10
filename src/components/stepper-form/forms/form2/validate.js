const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required'
  }

  return errors;
};

export default validate;
