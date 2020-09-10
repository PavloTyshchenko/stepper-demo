const validate = values => {
  const errors = {};

  if (!values.number) {
    errors.number = 'Required'
  }

  if (values.number && values.number.length < 9) {
    errors.number = 'Invalid number';
  }


  return errors;
};

export default validate;
