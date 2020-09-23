import React from 'react';

import { PlaceOutlined, StorageRounded, CheckRounded } from '@material-ui/icons';
import PropTypes from 'prop-types';

const iconMapping = {
  origin: PlaceOutlined,
  consumption: StorageRounded,
  discovery_done: CheckRounded,
};

const NotificationIcons = ({ icon }) => {
  const IconComponent = iconMapping[icon];

  return <IconComponent />;
};

NotificationIcons.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default NotificationIcons;
