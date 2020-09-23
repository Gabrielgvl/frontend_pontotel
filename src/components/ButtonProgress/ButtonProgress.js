import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { LoadingIndicator } from './styles';

const ButtonProgress = ({ children, disabled, ...props }) => (
  <div style={{ position: 'relative' }}>
    <Button disabled={disabled} {...props}>
      {children}
    </Button>
    {disabled && <LoadingIndicator size={24} />}
  </div>
);

ButtonProgress.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

ButtonProgress.defaultProps = {
  disabled: false,
};

export default ButtonProgress;
