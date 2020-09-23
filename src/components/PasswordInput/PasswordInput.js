import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PropTypes from 'prop-types';
import FormikTextField from '../FormikTextField';

const PasswordInput = ({
  label, name, value, onChange, showPass, ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const getAdornment = () => {
    if (showPass) {
      return (
        <IconButton
          style={{ padding: 'initial' }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      );
    }
    return <></>;
  };

  return (
    <FormikTextField
      label={label}
      name={name}
      margin="normal"
      variant="standard"
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: getAdornment(),
      }}
      {...props}
    />
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  showPass: PropTypes.bool,
};

PasswordInput.defaultProps = {
  label: 'Senha',
  name: 'password',
  showPass: true,
};

export default PasswordInput;
