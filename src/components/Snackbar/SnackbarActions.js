import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';

const SnackbarActions = ({ id }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <Button
      onClick={() => closeSnackbar(id)}
      className="text-white"
      type="button"
    >
      Fechar
    </Button>
  );
};

SnackbarActions.propTypes = {
  id: PropTypes.number.isRequired,
};

export default SnackbarActions;
