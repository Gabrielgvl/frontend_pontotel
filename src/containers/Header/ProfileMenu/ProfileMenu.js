import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Menu, MenuItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import ExitIcon from '@material-ui/icons/ExitToApp';

import PropTypes from 'prop-types';

import useJwtAuth from '@gabrielgvl/jwt_auth_react';
import useNotistack from '../../../hooks/useNotistack';

const ProfileMenu = ({ anchorEl, setAnchorEl, history }) => {
  const { logOut } = useJwtAuth();
  const { infoSnack } = useNotistack();

  const handleLogOut = async () => {
    infoSnack('Até a próxima!');
    await logOut();
    history.push('/');
  };

  return (
    <div>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => handleLogOut()}>
          <ListItemIcon>
            <ExitIcon />
          </ListItemIcon>
          <ListItemText inset primary="Sair" />
        </MenuItem>
      </Menu>
    </div>
  );
};

ProfileMenu.propTypes = {
  anchorEl: PropTypes.node,
  setAnchorEl: PropTypes.any,
};

export default withRouter(ProfileMenu);
