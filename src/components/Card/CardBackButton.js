import React from 'react';
import { withRouter } from 'react-router-dom';

import { IconButton, Button } from '@material-ui/core';
import BackIcon from '@material-ui/icons/KeyboardArrowLeft';

import PropTypes from 'prop-types';
import { BackButton } from './styles';

const CardBackButtonComponent = ({
  path,
  history,
  name,
}) => {
  const handleClick = () => {
    history.push(path);
  };

  return (
    <BackButton>
      <IconButton className="d-none-md" onClick={handleClick}>
        <BackIcon />
      </IconButton>
      <Button className="d-none-mobile" color="inherit" onClick={handleClick}>
        <BackIcon />
        {name}
      </Button>
    </BackButton>
  );
};

CardBackButtonComponent.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string,
};

CardBackButtonComponent.defaultProps = {
  name: 'Voltar',
};

export const CardBackButton = withRouter(CardBackButtonComponent);
