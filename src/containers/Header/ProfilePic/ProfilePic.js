import React from 'react';
import { isEmpty } from 'lodash';

import CircularProgress from '@material-ui/core/CircularProgress';

import DefaultAvatar from 'assets/img/defaultAvatar.png';
import PropTypes from 'prop-types';
import { Avatar } from './styles';

const ProfilePic = ({ setAnchorEl }) => {
  const { data, loading } = { data: { userProfilePic: undefined } }; // useAxios();

  if (loading && isEmpty(data)) return <CircularProgress size={20} color="inherit" />;

  // const { profilePic } = data.userProfilePic;

  return (
    <Avatar
      src={DefaultAvatar}
      alt="Avatar"
      onClick={(event) => setAnchorEl(event.currentTarget)}
    />
  );
};

ProfilePic.propTypes = {
  setAnchorEl: PropTypes.func.isRequired,
};

export default ProfilePic;
