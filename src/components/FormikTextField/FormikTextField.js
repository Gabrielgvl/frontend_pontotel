import React from 'react';
import { TextField } from '@material-ui/core';
import { getIn, useFormikContext } from 'formik';
import PropTypes from 'prop-types';

const FormikTextField = ({
  name, customOnBlur, customOnChange, ...props
}) => {
  const {
    errors, values, touched, handleChange, handleBlur,
  } = useFormikContext();

  const onBlur = (event) => {
    customOnBlur(event);
    handleChange(name);
  };

  const onChange = (event) => {
    customOnChange(event);
    handleChange(name);
  };

  return (
    <TextField
      id={name}
      name={name}
      value={getIn(values, name)}
      onChange={customOnChange ? onChange : handleChange}
      onBlur={customOnBlur ? onBlur : handleBlur}
      helperText={getIn(errors, name) && getIn(touched, name) ? getIn(errors, name) : ''}
      error={!!getIn(errors, name) && !!getIn(touched, name)}
      {...props}
    />
  );
};

FormikTextField.propTypes = {
  name: PropTypes.string.isRequired,
  customOnBlur: PropTypes.func,
  customOnChange: PropTypes.func,
};

export default FormikTextField;
